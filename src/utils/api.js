import { getToken, clearAuth } from "./auth";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";

async function request(path, options = {}) {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const token = getToken();
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok) {
    if (response.status === 401 && path !== "/api/auth/login") {
      clearAuth();
      if (window.location.pathname !== "/login") {
        window.location.assign("/login");
      }
    }

    const error = new Error(data?.message || "Request failed");
    error.status = response.status;
    throw error;
  }

  return data;
}

export async function login(email, password) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function logout() {
  try {
    await request("/api/auth/logout", { method: "POST" });
  } catch {
    // Always clear local auth even if the backend session is already gone
  } finally {
    clearAuth();
  }
}

export async function getMe() {
  return request("/api/auth/me");
}

export async function getNotifications() {
  return request("/api/notifications");
}

export async function getPublicNotifications() {
  const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5001";
  const response = await fetch(`${API_BASE}/api/notifications`);
  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Failed to load notifications");
  }

  return data;
}

export async function createNotification(payload) {
  return request("/api/notifications", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateNotification(id, payload) {
  return request(`/api/notifications/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function disableNotification(id) {
  return request(`/api/notifications/${id}/disable`, {
    method: "PATCH",
  });
}

export async function getWhatsappConfig() {
  return request("/api/whatsapp/config");
}

export async function saveWhatsappConfig(payload) {
  return request("/api/whatsapp/config", {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function getWhatsappLogs() {
  return request("/api/whatsapp/logs");
}

export async function getWhatsappTemplates() {
  return request("/api/whatsapp/templates");
}

export async function createWhatsappTemplate(payload) {
  return request("/api/whatsapp/templates", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateWhatsappTemplate(id, payload) {
  return request(`/api/whatsapp/templates/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function sendWhatsappMessage(payload) {
  return request("/api/whatsapp/send", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getCampaigns() {
  return request("/api/messaging/campaigns");
}

export async function createCampaign(payload) {
  return request("/api/messaging/campaigns", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function getMessageLogs(params = {}) {
  const query = new URLSearchParams();
  if (params.campaignId) query.set("campaignId", params.campaignId);
  if (params.channel) query.set("channel", params.channel);
  if (params.status) query.set("status", params.status);
  const qs = query.toString();
  return request(`/api/messaging/logs${qs ? `?${qs}` : ""}`);
}
