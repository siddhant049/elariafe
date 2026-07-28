import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Paper,
  Stack,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
  FormControlLabel,
  Switch,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import {
  Add as AddIcon,
  NotificationsNone as NotificationsIcon,
  WhatsApp as WhatsAppIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  Send as SendIcon,
  InboxOutlined as InboxIcon,
  Description as TemplateIcon,
  Edit as EditIcon,
  UploadFile as UploadFileIcon,
  Campaign as CampaignIcon,
  ListAlt as LogsIcon,
  CheckCircleOutlined as ValidIcon,
  HighlightOff as InvalidIcon,
  Visibility as LiveIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {
  createCampaign,
  createNotification,
  createWhatsappTemplate,
  disableNotification,
  getCampaigns,
  getMessageLogs,
  getNotifications,
  getWhatsappConfig,
  getWhatsappLogs,
  getWhatsappTemplates,
  logout as logoutRequest,
  saveWhatsappConfig,
  sendWhatsappMessage,
  updateNotification,
} from "../utils/api";
import { getUser } from "../utils/auth";

const EMPTY_NOTIFICATION_FORM = {
  title: "",
  subtitle: "",
  info: "",
  disclaimer: "",
  termsAndConditions: "",
  isValid: true,
  validUntil: null,
};

const EMPTY_TEMPLATE_FORM = {
  name: "",
  body: "",
  language: "en",
  templateSid: "",
};

const EMPTY_CAMPAIGN_FORM = {
  channel: "WHATSAPP",
  scheduledAt: null,
  contentSid: "",
  templateName: "",
  body: "",
  phonesText: "",
  targetType: "EXCEL_UPLOAD",
};

const theme = createTheme({
  palette: {
    primary: { main: "#001b3d" },
    secondary: { main: "#efae4c" },
    background: { default: "#f3efe8", paper: "#ffffff" },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h5: { fontWeight: 600 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage:
            "linear-gradient(135deg, #001b3d 0%, #0a2f5c 55%, #123a6b 100%)",
          boxShadow: "0 10px 30px rgba(0, 27, 61, 0.22)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          color: "#001b3d",
          boxShadow: "none",
          "&:hover": { boxShadow: "none", backgroundColor: "#d89b3e" },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 18,
        },
      },
    },
  },
});

function EmptyState({ title, description, compact = false }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={compact ? 0.75 : 1.5}
      sx={{ py: compact ? 3 : 6, color: "text.secondary" }}
    >
      <Box
        sx={{
          width: compact ? 48 : 56,
          height: compact ? 48 : 56,
          borderRadius: "50%",
          bgcolor: "rgba(0,27,61,0.05)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <InboxIcon sx={{ fontSize: compact ? 24 : 28, opacity: 0.55 }} />
      </Box>
      <Typography variant={compact ? "subtitle2" : "h6"} color="text.primary">
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ maxWidth: 360, textAlign: "center", fontSize: compact ? "0.8rem" : undefined }}
      >
        {description}
      </Typography>
    </Stack>
  );
}

function ClampText({ children, lines = 2 }) {
  return (
    <Typography
      variant="body2"
      sx={{
        color: "text.secondary",
        display: "-webkit-box",
        WebkitLineClamp: lines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        lineHeight: 1.55,
      }}
    >
      {children || "—"}
    </Typography>
  );
}

const WHATSAPP_ACCENT = "#128C7E";
const WHATSAPP_LIGHT = "#e8f7f0";

const NOTIFICATION_ACCENT = "#001b3d";
const NOTIFICATION_LIGHT = "#f3efe8";
const NOTIFICATION_GOLD = "#efae4c";

const notificationTableContainerSx = {
  borderRadius: 2,
  border: "1px solid rgba(0, 27, 61, 0.12)",
  bgcolor: "#fff",
  "& .MuiTableHead-root .MuiTableCell-root": {
    bgcolor: NOTIFICATION_LIGHT,
    color: "primary.main",
    fontWeight: 700,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    py: 1.25,
    px: 1.5,
    borderBottom: "2px solid rgba(0, 27, 61, 0.12)",
    whiteSpace: "nowrap",
  },
  "& .MuiTableBody-root .MuiTableRow-root:nth-of-type(even)": {
    bgcolor: "rgba(0, 27, 61, 0.015)",
  },
  "& .MuiTableBody-root .MuiTableRow-root:hover": {
    bgcolor: "rgba(239, 174, 76, 0.1)",
  },
  "& .MuiTableCell-root": {
    borderColor: "rgba(0, 27, 61, 0.06)",
    py: 1.5,
    px: 1.5,
    fontSize: "0.9rem",
    verticalAlign: "top",
  },
};

const whatsappTableContainerSx = {
  borderRadius: 2,
  border: "1px solid rgba(18, 140, 126, 0.14)",
  bgcolor: "#fff",
  "& .MuiTableHead-root .MuiTableCell-root": {
    bgcolor: WHATSAPP_LIGHT,
    color: "primary.main",
    fontWeight: 700,
    fontSize: "0.8rem",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    py: 1.25,
    px: 1.5,
    borderBottom: `2px solid rgba(18, 140, 126, 0.2)`,
  },
  "& .MuiTableBody-root .MuiTableRow-root:nth-of-type(even)": {
    bgcolor: "rgba(0, 27, 61, 0.015)",
  },
  "& .MuiTableBody-root .MuiTableRow-root:hover": {
    bgcolor: "rgba(37, 211, 102, 0.07)",
  },
  "& .MuiTableCell-root": {
    borderColor: "rgba(0, 27, 61, 0.06)",
    py: 1.5,
    px: 1.5,
    fontSize: "0.9rem",
    overflow: "visible",
    whiteSpace: "normal",
    height: "auto",
  },
};

const whatsappDataGridSx = {
  border: "1px solid rgba(18, 140, 126, 0.14)",
  borderRadius: 2,
  bgcolor: "#fff",
  overflow: "hidden",
  "& .MuiDataGrid-columnHeaders": {
    bgcolor: `${WHATSAPP_LIGHT} !important`,
    fontSize: "0.8rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
    borderBottom: `2px solid rgba(18, 140, 126, 0.2)`,
  },
  "& .MuiDataGrid-columnHeader": {
    bgcolor: `${WHATSAPP_LIGHT} !important`,
  },
  "& .MuiDataGrid-row:nth-of-type(even)": {
    bgcolor: "rgba(0, 27, 61, 0.015)",
  },
  "& .MuiDataGrid-row:hover": {
    bgcolor: "rgba(37, 211, 102, 0.07) !important",
  },
  "& .MuiDataGrid-row": {
    minHeight: "52px !important",
    maxHeight: "52px !important",
  },
  "& .MuiDataGrid-cell": {
    py: 1,
    fontSize: "0.9rem",
    alignItems: "center",
    display: "flex",
    borderColor: "rgba(0, 27, 61, 0.06)",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "1px solid rgba(0, 27, 61, 0.06)",
  },
};

function NotificationSection({ icon: Icon, title, subtitle, children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: 0,
        borderRadius: 2.5,
        border: "1px solid rgba(0, 27, 61, 0.14)",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 2.5 },
          py: 1.75,
          bgcolor: NOTIFICATION_LIGHT,
          borderBottom: "2px solid rgba(0, 27, 61, 0.12)",
          borderLeft: `4px solid ${NOTIFICATION_GOLD}`,
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 1.5,
              bgcolor: "#fff",
              color: NOTIFICATION_ACCENT,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(0, 27, 61, 0.1)",
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="primary.main">
              {title}
            </Typography>
            {subtitle ? (
              <Typography variant="body2" color="text.secondary" mt={0.25}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        </Stack>
      </Box>
      <Box sx={{ p: { xs: 1.5, md: 2 } }}>{children}</Box>
    </Paper>
  );
}

function WhatsAppAccordionSection({
  icon: Icon,
  title,
  subtitle,
  children,
  defaultExpanded = false,
}) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      disableGutters
      elevation={0}
      sx={{
        mb: 3,
        borderRadius: "12px !important",
        border: "1px solid rgba(18, 140, 126, 0.2)",
        bgcolor: "#fff",
        overflow: "hidden",
        "&:before": { display: "none" },
        "&.Mui-expanded": { mb: 3 },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: WHATSAPP_ACCENT }} />}
        sx={{
          px: { xs: 2, md: 2.5 },
          py: 0.5,
          minHeight: 72,
          bgcolor: WHATSAPP_LIGHT,
          borderLeft: `4px solid ${WHATSAPP_ACCENT}`,
          "& .MuiAccordionSummary-content": { my: 1.25 },
          "&.Mui-expanded": { minHeight: 72 },
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 1.5,
              bgcolor: "#fff",
              color: WHATSAPP_ACCENT,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(18, 140, 126, 0.12)",
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="primary.main">
              {title}
            </Typography>
            {subtitle ? (
              <Typography variant="body2" color="text.secondary" mt={0.25}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ p: { xs: 1.5, md: 2 } }}>{children}</AccordionDetails>
    </Accordion>
  );
}

function WhatsAppSection({ icon: Icon, title, subtitle, children }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mb: 4,
        borderRadius: 2.5,
        border: "1px solid rgba(18, 140, 126, 0.2)",
        bgcolor: "#fff",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          px: { xs: 2, md: 2.5 },
          py: 1.75,
          bgcolor: WHATSAPP_LIGHT,
          borderBottom: `2px solid rgba(18, 140, 126, 0.22)`,
          borderLeft: `4px solid ${WHATSAPP_ACCENT}`,
        }}
      >
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Box
            sx={{
              width: 42,
              height: 42,
              borderRadius: 1.5,
              bgcolor: "#fff",
              color: WHATSAPP_ACCENT,
              display: "grid",
              placeItems: "center",
              flexShrink: 0,
              boxShadow: "0 2px 8px rgba(18, 140, 126, 0.12)",
            }}
          >
            <Icon fontSize="small" />
          </Box>
          <Box>
            <Typography variant="subtitle1" fontWeight={700} color="primary.main">
              {title}
            </Typography>
            {subtitle ? (
              <Typography variant="body2" color="text.secondary" mt={0.25}>
                {subtitle}
              </Typography>
            ) : null}
          </Box>
        </Stack>
      </Box>
      <Box sx={{ p: { xs: 1.5, md: 2 } }}>{children}</Box>
    </Paper>
  );
}

function StatCard({ icon: Icon, label, value, accent, tint = WHATSAPP_ACCENT, lightBg = WHATSAPP_LIGHT }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2.5,
        border: "1px solid rgba(18, 140, 126, 0.16)",
        background: `linear-gradient(145deg, #ffffff 0%, ${lightBg} 100%)`,
        minWidth: 0,
        position: "relative",
        overflow: "hidden",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        "&:hover": {
          boxShadow: "0 8px 24px rgba(18, 140, 126, 0.12)",
          transform: "translateY(-1px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: -8,
          top: -8,
          opacity: 0.07,
          color: tint,
        }}
      >
        <Icon sx={{ fontSize: 88 }} />
      </Box>
      <Stack direction="row" spacing={1.5} alignItems="flex-start">
        <Box
          sx={{
            width: 44,
            height: 44,
            borderRadius: 2,
            bgcolor: "#fff",
            color: tint,
            display: "grid",
            placeItems: "center",
            flexShrink: 0,
            boxShadow: "0 4px 12px rgba(18, 140, 126, 0.15)",
          }}
        >
          <Icon fontSize="small" />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            fontWeight={700}
            sx={{ textTransform: "uppercase", letterSpacing: "0.06em", fontSize: "0.75rem" }}
          >
            {label}
          </Typography>
          <Typography variant="h4" fontWeight={700} color="primary.main" sx={{ lineHeight: 1.15, my: 0.5 }}>
            {value}
          </Typography>
          {accent ? (
            <Typography variant="body2" color="text.secondary">
              {accent}
            </Typography>
          ) : null}
        </Box>
      </Stack>
    </Paper>
  );
}

function CampaignStatusChip({ status }) {
  const color =
    status === "COMPLETED"
      ? "success"
      : status === "FAILED"
        ? "error"
        : status === "IN_PROGRESS"
          ? "warning"
          : "default";

  return (
    <Chip
      size="small"
      label={status.replace(/_/g, " ")}
      color={color}
      variant="outlined"
      sx={{ fontWeight: 600, fontSize: "0.8rem" }}
    />
  );
}

/** Parse CSV: column A = mobile, row 1 (A1) = header — skipped */
function parsePhoneCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length <= 1) return [];

  return lines.slice(1).flatMap((line) => {
    const firstCol = line.split(",")[0]?.trim().replace(/^"|"$/g, "") || "";
    return firstCol ? [firstCol] : [];
  });
}

const DashboardPage = () => {
  const navigate = useNavigate();
  const user = getUser();

  const [loggingOut, setLoggingOut] = useState(false);
  const [activeTab, setActiveTab] = useState("notifications");
  const [toast, setToast] = useState(null);

  const [notifications, setNotifications] = useState([]);
  const [notificationsLoading, setNotificationsLoading] = useState(false);
  const [addNotificationOpen, setAddNotificationOpen] = useState(false);
  const [editingNotificationId, setEditingNotificationId] = useState(null);
  const [disableTarget, setDisableTarget] = useState(null);
  const [disabling, setDisabling] = useState(false);
  const [savingNotification, setSavingNotification] = useState(false);
  const [notificationForm, setNotificationForm] = useState(
    EMPTY_NOTIFICATION_FORM
  );

  const [whatsappLogs, setWhatsappLogs] = useState([]);
  const [logsLoading, setLogsLoading] = useState(false);
  const [messageLogs, setMessageLogs] = useState([]);
  const [messageLogsLoading, setMessageLogsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const [campaignsLoading, setCampaignsLoading] = useState(false);
  const [campaignOpen, setCampaignOpen] = useState(false);
  const [savingCampaign, setSavingCampaign] = useState(false);
  const [campaignForm, setCampaignForm] = useState(EMPTY_CAMPAIGN_FORM);
  const csvInputRef = useRef(null);
  const [templates, setTemplates] = useState([]);
  const [templatesLoading, setTemplatesLoading] = useState(false);
  const [templatesError, setTemplatesError] = useState(null);
  const [templateOpen, setTemplateOpen] = useState(false);
  const [savingTemplate, setSavingTemplate] = useState(false);
  const [templateForm, setTemplateForm] = useState(EMPTY_TEMPLATE_FORM);
  const [configOpen, setConfigOpen] = useState(false);
  const [sendOpen, setSendOpen] = useState(false);
  const [savingConfig, setSavingConfig] = useState(false);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [configHint, setConfigHint] = useState(null);
  const [configForm, setConfigForm] = useState({
    authToken: "",
    sid: "",
    phoneNumber: "",
  });
  const [sendForm, setSendForm] = useState({ to: "", message: "" });

  const showToast = (text, severity = "success") => {
    setToast({ text, severity });
    window.setTimeout(() => setToast(null), 2800);
  };

  const loadNotifications = useCallback(async () => {
    setNotificationsLoading(true);
    try {
      const data = await getNotifications();
      setNotifications(data.notifications || []);
    } catch (error) {
      showToast(error.message || "Failed to load notifications", "error");
    } finally {
      setNotificationsLoading(false);
    }
  }, []);

  const loadWhatsappLogs = useCallback(async () => {
    setLogsLoading(true);
    try {
      const data = await getWhatsappLogs();
      setWhatsappLogs(data.logs || []);
    } catch (error) {
      showToast(error.message || "Failed to load WhatsApp logs", "error");
    } finally {
      setLogsLoading(false);
    }
  }, []);

  const loadTemplates = useCallback(async ({ silent = false } = {}) => {
    setTemplatesLoading(true);
    setTemplatesError(null);

    let lastError = null;
    for (let attempt = 0; attempt < 3; attempt += 1) {
      try {
        const data = await getWhatsappTemplates();
        setTemplates(data.templates || []);
        setTemplatesLoading(false);
        return;
      } catch (error) {
        lastError = error;
        if (attempt < 2) {
          await new Promise((resolve) => {
            window.setTimeout(resolve, 700 * (attempt + 1));
          });
        }
      }
    }

    const message = lastError?.message || "Failed to load templates";
    setTemplatesError(message);
    if (!silent) {
      showToast(message, "error");
    }
    setTemplatesLoading(false);
  }, []);

  const loadCampaigns = useCallback(async () => {
    setCampaignsLoading(true);
    try {
      const data = await getCampaigns();
      setCampaigns(data.campaigns || []);
    } catch (error) {
      showToast(error.message || "Failed to load campaigns", "error");
    } finally {
      setCampaignsLoading(false);
    }
  }, []);

  const loadMessageLogs = useCallback(async () => {
    setMessageLogsLoading(true);
    try {
      const data = await getMessageLogs();
      setMessageLogs(data.logs || []);
    } catch (error) {
      showToast(error.message || "Failed to load message logs", "error");
    } finally {
      setMessageLogsLoading(false);
    }
  }, []);

  const logsPollRef = useRef(null);

  const stopLogsPolling = useCallback(() => {
    if (logsPollRef.current) {
      clearInterval(logsPollRef.current);
      logsPollRef.current = null;
    }
  }, []);

  const refreshCampaignsAndLogs = useCallback(async () => {
    try {
      const [campaignsData, logsData] = await Promise.all([
        getCampaigns(),
        getMessageLogs(),
      ]);
      setCampaigns(campaignsData.campaigns || []);
      setMessageLogs(logsData.logs || []);
      return {
        campaigns: campaignsData.campaigns || [],
        logs: logsData.logs || [],
      };
    } catch {
      return { campaigns: [], logs: [] };
    }
  }, []);

  const startLogsPolling = useCallback(
    (campaignId, scheduledAt) => {
      stopLogsPolling();
      let attempts = 0;
      const scheduledMs = scheduledAt
        ? new Date(scheduledAt).getTime()
        : Date.now();
      // Poll until ~3 min after scheduled time, max 10 min total
      const maxAttempts = Math.min(
        300,
        Math.max(90, Math.ceil((scheduledMs - Date.now() + 180000) / 2000))
      );

      const poll = async () => {
        attempts += 1;
        const { campaigns: latestCampaigns } = await refreshCampaignsAndLogs();
        const campaign = latestCampaigns.find((c) => c.id === campaignId);

        if (
          campaign &&
          (campaign.status === "COMPLETED" || campaign.status === "FAILED")
        ) {
          stopLogsPolling();
          return;
        }

        if (attempts >= maxAttempts) {
          stopLogsPolling();
        }
      };

      poll();
      logsPollRef.current = setInterval(poll, 2000);
    },
    [refreshCampaignsAndLogs, stopLogsPolling]
  );

  useEffect(() => {
    loadNotifications();
    loadTemplates({ silent: true });
  }, [loadNotifications, loadTemplates]);

  useEffect(() => {
    if (activeTab === "whatsapp") {
      loadWhatsappLogs();
      loadTemplates({ silent: true });
      loadCampaigns();
      loadMessageLogs();
    }
  }, [activeTab, loadWhatsappLogs, loadTemplates, loadCampaigns, loadMessageLogs]);

  useEffect(() => () => stopLogsPolling(), [stopLogsPolling]);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await logoutRequest();
      navigate("/login", { replace: true });
    } catch {
      showToast("Logout failed", "error");
    } finally {
      setLoggingOut(false);
    }
  };

  const updateNotificationField = (field) => (event) => {
    setNotificationForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSaveNotification = async () => {
    const required = [
      "title",
      "subtitle",
      "info",
      "disclaimer",
      "termsAndConditions",
    ];
    const missing = required.some((key) => !String(notificationForm[key] || "").trim());
    if (missing || !notificationForm.validUntil) {
      showToast("Please fill all notification fields including Valid upto", "error");
      return;
    }

    const payload = {
      title: notificationForm.title,
      subtitle: notificationForm.subtitle,
      info: notificationForm.info,
      disclaimer: notificationForm.disclaimer,
      termsAndConditions: notificationForm.termsAndConditions,
      isValid: notificationForm.isValid,
      validUntil: dayjs(notificationForm.validUntil).toISOString(),
    };

    setSavingNotification(true);
    try {
      if (editingNotificationId) {
        await updateNotification(editingNotificationId, payload);
        showToast("Notification updated");
      } else {
        await createNotification(payload);
        showToast("Notification saved");
      }
      setAddNotificationOpen(false);
      setEditingNotificationId(null);
      setNotificationForm(EMPTY_NOTIFICATION_FORM);
      await loadNotifications();
    } catch (error) {
      showToast(error.message || "Failed to save notification", "error");
    } finally {
      setSavingNotification(false);
    }
  };

  const openAddNotification = () => {
    setEditingNotificationId(null);
    setNotificationForm(EMPTY_NOTIFICATION_FORM);
    setAddNotificationOpen(true);
  };

  const openEditNotification = (item) => {
    setEditingNotificationId(item.id);
    setNotificationForm({
      title: item.title || "",
      subtitle: item.subtitle || "",
      info: item.info || "",
      disclaimer: item.disclaimer || "",
      termsAndConditions: item.termsAndConditions || "",
      isValid: Boolean(item.isValid),
      validUntil: item.validUntil ? dayjs(item.validUntil) : null,
    });
    setAddNotificationOpen(true);
  };

  const closeNotificationModal = () => {
    setAddNotificationOpen(false);
    setEditingNotificationId(null);
    setNotificationForm(EMPTY_NOTIFICATION_FORM);
  };

  const confirmDisableNotification = async () => {
    if (!disableTarget) return;
    setDisabling(true);
    try {
      await disableNotification(disableTarget.id);
      showToast("Notification disabled");
      setDisableTarget(null);
      await loadNotifications();
    } catch (error) {
      showToast(error.message || "Failed to disable notification", "error");
    } finally {
      setDisabling(false);
    }
  };

  const openConfigModal = async () => {
    setConfigOpen(true);
    try {
      const data = await getWhatsappConfig();
      const config = data.config || {};
      setConfigHint(
        config.authTokenSet
          ? `Current Auth Token: ${config.authToken}`
          : "No Auth Token saved yet"
      );
      setConfigForm({
        sid: config.sid || "",
        phoneNumber: config.phoneNumber || "",
        authToken: "",
      });
    } catch (error) {
      showToast(error.message || "Failed to load configuration", "error");
    }
  };

  const handleSaveConfig = async () => {
    if (
      !configForm.authToken.trim() ||
      !configForm.sid.trim() ||
      !configForm.phoneNumber.trim()
    ) {
      showToast("Auth Token, SID, and Phone Number are required", "error");
      return;
    }

    setSavingConfig(true);
    try {
      await saveWhatsappConfig(configForm);
      showToast("WhatsApp configuration saved");
      setConfigOpen(false);
    } catch (error) {
      showToast(error.message || "Failed to save configuration", "error");
    } finally {
      setSavingConfig(false);
    }
  };

  const handleSaveTemplate = async () => {
    if (!templateForm.name.trim() || !templateForm.body.trim()) {
      showToast("Template name and body are required", "error");
      return;
    }

    setSavingTemplate(true);
    try {
      await createWhatsappTemplate(templateForm);
      showToast("Template saved");
      setTemplateOpen(false);
      setTemplateForm(EMPTY_TEMPLATE_FORM);
      await loadTemplates();
    } catch (error) {
      showToast(error.message || "Failed to save template", "error");
    } finally {
      setSavingTemplate(false);
    }
  };

  const handleCsvUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith(".csv")) {
      showToast("Please upload a .csv file", "error");
      event.target.value = "";
      return;
    }

    try {
      const text = await file.text();
      const imported = parsePhoneCsv(text);

      if (imported.length === 0) {
        showToast("No phone numbers found in CSV (check format)", "error");
        return;
      }

      const existing = campaignForm.phonesText
        .split(/[\n,]+/)
        .map((p) => p.trim())
        .filter(Boolean);
      const merged = [...new Set([...existing, ...imported])];

      setCampaignForm((prev) => ({
        ...prev,
        phonesText: merged.join("\n"),
      }));

      showToast(`Added ${imported.length} number(s) from CSV`);
    } catch {
      showToast("Failed to read CSV file", "error");
    } finally {
      event.target.value = "";
    }
  };

  const handleScheduleCampaign = async () => {
    if (!campaignForm.scheduledAt) {
      showToast("Scheduled time is required", "error");
      return;
    }

    const phones = campaignForm.phonesText
      .split(/[\n,]+/)
      .map((p) => p.trim())
      .filter(Boolean);

    if (phones.length === 0) {
      showToast("Add at least one phone number", "error");
      return;
    }

    if (!campaignForm.contentSid.trim()) {
      showToast("Select a WhatsApp template", "error");
      return;
    }

    setSavingCampaign(true);
    try {
      const result = await createCampaign({
        channel: "WHATSAPP",
        scheduledAt: dayjs(campaignForm.scheduledAt).toISOString(),
        contentSid: campaignForm.contentSid || undefined,
        templateName: campaignForm.templateName || undefined,
        variables: [],
        phones,
        targetType: campaignForm.targetType,
      });
      showToast("Campaign scheduled");
      setCampaignOpen(false);
      setCampaignForm(EMPTY_CAMPAIGN_FORM);
      await refreshCampaignsAndLogs();
      if (result?.campaign?.id) {
        startLogsPolling(result.campaign.id, result.campaign.scheduledAt);
        window.setTimeout(() => {
          document
            .getElementById("twilio-message-logs")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    } catch (error) {
      showToast(error.message || "Failed to schedule campaign", "error");
    } finally {
      setSavingCampaign(false);
    }
  };

  const handleSendMessage = async () => {
    if (!sendForm.to.trim() || !sendForm.message.trim()) {
      showToast("Recipient and message are required", "error");
      return;
    }

    setSendingMessage(true);
    try {
      await sendWhatsappMessage(sendForm);
      showToast("Message queued");
      setSendOpen(false);
      setSendForm({ to: "", message: "" });
      await loadWhatsappLogs();
    } catch (error) {
      showToast(error.message || "Failed to send message", "error");
    } finally {
      setSendingMessage(false);
    }
  };

  const whatsappColumns = useMemo(
    () => [
      {
        field: "to",
        headerName: "To",
        width: 160,
        renderCell: (params) => (
          <Typography fontWeight={600}>{params.value}</Typography>
        ),
      },
      {
        field: "message",
        headerName: "Message",
        flex: 2,
        minWidth: 280,
      },
      {
        field: "status",
        headerName: "Status",
        width: 130,
        renderCell: (params) => {
          const color =
            params.value === "queued"
              ? "warning"
              : params.value === "sent"
                ? "success"
                : "error";
          return (
            <Chip
              size="small"
              label={params.value}
              color={color}
              variant="outlined"
              sx={{ fontWeight: 600, textTransform: "capitalize" }}
            />
          );
        },
      },
      {
        field: "createdAt",
        headerName: "Time",
        width: 180,
        valueFormatter: (value) => dayjs(value).format("DD MMM YYYY, HH:mm"),
      },
    ],
    []
  );

  const notificationStats = useMemo(() => {
    const now = dayjs();
    return {
      total: notifications.length,
      valid: notifications.filter((n) => n.isValid).length,
      invalid: notifications.filter((n) => !n.isValid).length,
      live: notifications.filter(
        (n) => n.isValid && n.validUntil && dayjs(n.validUntil).isAfter(now)
      ).length,
    };
  }, [notifications]);

  const whatsappStats = useMemo(
    () => ({
      templates: templates.length,
      activeTemplates: templates.filter((t) => t.isActive).length,
      campaigns: campaigns.length,
      messagesSent: campaigns.reduce((sum, c) => sum + (c.sentCount || 0), 0),
      logCount: messageLogs.length,
    }),
    [templates, campaigns, messageLogs]
  );

  const campaignTemplateOptions = useMemo(
    () => templates.filter((t) => t.isActive && t.templateSid),
    [templates]
  );

  const openCampaignModal = () => {
    setCampaignOpen(true);
    loadTemplates({ silent: true });
  };

  const panelSx = {
    p: { xs: 2, md: 2.5 },
    borderRadius: 2.5,
    border: "1px solid rgba(0,27,61,0.06)",
    boxShadow: "0 10px 32px rgba(0,27,61,0.06)",
    overflow: "hidden",
  };

  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <AppBar position="sticky" elevation={0}>
          <Toolbar
            sx={{
              minHeight: { xs: 72, md: 80 },
              px: { xs: 2, md: 3 },
              gap: 2,
            }}
          >
            <Stack spacing={0.25} sx={{ minWidth: 140 }}>
              <Typography
                variant="overline"
                sx={{
                  color: "secondary.main",
                  letterSpacing: "0.28em",
                  lineHeight: 1.2,
                  fontWeight: 700,
                }}
              >
                Elaria
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                Admin Dashboard
              </Typography>
            </Stack>

            <Tabs
              value={activeTab}
              onChange={(_e, value) => setActiveTab(value)}
              textColor="inherit"
              TabIndicatorProps={{
                sx: {
                  height: 3,
                  borderRadius: 2,
                  backgroundColor: "secondary.main",
                },
              }}
              sx={{
                flex: 1,
                minHeight: 64,
                mx: { xs: 1, md: 4 },
                "& .MuiTab-root": {
                  minHeight: 64,
                  px: { xs: 1.5, md: 3 },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  opacity: 0.72,
                  color: "#fff",
                  "&.Mui-selected": {
                    opacity: 1,
                    color: "#fff",
                    fontWeight: 700,
                  },
                },
              }}
            >
              <Tab
                value="notifications"
                icon={<NotificationsIcon />}
                iconPosition="start"
                label="Notification Center"
              />
              <Tab
                value="whatsapp"
                icon={<WhatsAppIcon />}
                iconPosition="start"
                label="WhatsApp"
              />
            </Tabs>

            <Stack direction="row" alignItems="center" spacing={1.5}>
              <Box sx={{ display: { xs: "none", md: "block" }, textAlign: "right" }}>
                <Typography variant="body2" fontWeight={600}>
                  {user?.name || "Admin"}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: "rgba(255,255,255,0.7)" }}
                >
                  {user?.email || ""}
                </Typography>
              </Box>
              <Avatar
                sx={{
                  bgcolor: "secondary.main",
                  color: "primary.main",
                  width: 44,
                  height: 44,
                  fontWeight: 700,
                }}
              >
                {(user?.name || "E").charAt(0).toUpperCase()}
              </Avatar>
              <Tooltip title="Logout">
                <span>
                  <IconButton
                    color="inherit"
                    onClick={handleLogout}
                    disabled={loggingOut}
                    sx={{
                      border: "1px solid rgba(255,255,255,0.25)",
                      width: 44,
                      height: 44,
                    }}
                  >
                    {loggingOut ? (
                      <CircularProgress size={18} color="inherit" />
                    ) : (
                      <LogoutIcon />
                    )}
                  </IconButton>
                </span>
              </Tooltip>
            </Stack>
          </Toolbar>
        </AppBar>

        <Container
          maxWidth={false}
          sx={{ py: { xs: 2, md: 2.5 }, px: { xs: 2, md: 3 } }}
        >
          {activeTab === "notifications" && (
            <Paper elevation={0} sx={{ ...panelSx, p: 0 }}>
              <Box
                sx={{
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 2, md: 2.5 },
                  background:
                    "linear-gradient(135deg, #001b3d 0%, #0a2f5c 55%, #123a6b 100%)",
                  color: "#fff",
                }}
              >
                <Stack
                  direction={{ xs: "column", lg: "row" }}
                  justifyContent="space-between"
                  alignItems={{ xs: "stretch", lg: "center" }}
                  spacing={2}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.14)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <NotificationsIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={700}>
                        Notification Center
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                        Manage homepage popups — only valid, non-expired notifications are shown
                        to visitors.
                      </Typography>
                    </Box>
                  </Stack>
                  <Button
                    variant="contained"
                    size="medium"
                    startIcon={<AddIcon />}
                    onClick={openAddNotification}
                    sx={{
                      bgcolor: NOTIFICATION_GOLD,
                      color: NOTIFICATION_ACCENT,
                      fontWeight: 700,
                      alignSelf: { xs: "stretch", lg: "center" },
                      "&:hover": { bgcolor: "#f5be6a" },
                    }}
                  >
                    Add Notification
                  </Button>
                </Stack>
              </Box>

              <Box sx={{ px: { xs: 2, md: 2.5 }, py: { xs: 2, md: 2.5 } }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      md: "repeat(4, 1fr)",
                    },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <StatCard
                    icon={NotificationsIcon}
                    label="Total"
                    value={notificationStats.total}
                    accent="All notifications"
                    tint={NOTIFICATION_ACCENT}
                    lightBg={NOTIFICATION_LIGHT}
                  />
                  <StatCard
                    icon={ValidIcon}
                    label="Valid"
                    value={notificationStats.valid}
                    accent="Marked as active"
                    tint="#128C7E"
                    lightBg={NOTIFICATION_LIGHT}
                  />
                  <StatCard
                    icon={InvalidIcon}
                    label="Invalid"
                    value={notificationStats.invalid}
                    accent="Disabled or expired"
                    tint="#6b7280"
                    lightBg={NOTIFICATION_LIGHT}
                  />
                  <StatCard
                    icon={LiveIcon}
                    label="Live on site"
                    value={notificationStats.live}
                    accent="Shown on homepage now"
                    tint={NOTIFICATION_GOLD}
                    lightBg={NOTIFICATION_LIGHT}
                  />
                </Box>

                <NotificationSection
                  icon={NotificationsIcon}
                  title="All Notifications"
                  subtitle="Click Valid to disable a notification. Edit any row to update content or expiry."
                >
                  {notificationsLoading ? (
                    <Stack alignItems="center" justifyContent="center" py={6}>
                      <CircularProgress sx={{ color: NOTIFICATION_ACCENT }} />
                    </Stack>
                  ) : notifications.length === 0 ? (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: "1px dashed rgba(0, 27, 61, 0.2)",
                        bgcolor: NOTIFICATION_LIGHT,
                        textAlign: "center",
                      }}
                    >
                      <EmptyState
                        title="No notifications yet"
                        description="Click Add Notification to create the first homepage popup."
                      />
                    </Paper>
                  ) : (
                    <TableContainer
                      sx={{ ...notificationTableContainerSx, maxHeight: 560, overflow: "auto" }}
                    >
                      <Table stickyHeader>
                        <TableHead>
                          <TableRow>
                            {[
                              "Title",
                              "Subtitle",
                              "Info",
                              "Disclaimer",
                              "Terms & Conditions",
                              "Valid upto",
                              "Valid",
                              "Created",
                              "Actions",
                            ].map((label) => (
                              <TableCell key={label}>{label}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {notifications.map((item) => (
                            <TableRow key={item.id} hover>
                              <TableCell sx={{ minWidth: 150 }}>
                                <Typography fontWeight={700} color="primary.main">
                                  {item.title}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ minWidth: 150 }}>
                                <Typography variant="body2" fontWeight={500}>
                                  {item.subtitle}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ minWidth: 200 }}>
                                <ClampText lines={3}>{item.info}</ClampText>
                              </TableCell>
                              <TableCell sx={{ minWidth: 180 }}>
                                <ClampText lines={3}>{item.disclaimer}</ClampText>
                              </TableCell>
                              <TableCell sx={{ minWidth: 200 }}>
                                <ClampText lines={3}>{item.termsAndConditions}</ClampText>
                              </TableCell>
                              <TableCell sx={{ whiteSpace: "nowrap" }}>
                                <Typography variant="body2" color="text.secondary">
                                  {item.validUntil
                                    ? dayjs(item.validUntil).format("DD MMM YYYY")
                                    : "—"}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Chip
                                  size="small"
                                  label={item.isValid ? "Valid" : "Invalid"}
                                  color={item.isValid ? "success" : "default"}
                                  variant={item.isValid ? "filled" : "outlined"}
                                  onClick={() => {
                                    if (item.isValid) setDisableTarget(item);
                                  }}
                                  sx={{
                                    fontWeight: 600,
                                    cursor: item.isValid ? "pointer" : "default",
                                  }}
                                />
                              </TableCell>
                              <TableCell sx={{ whiteSpace: "nowrap" }}>
                                <Typography variant="body2" color="text.secondary">
                                  {dayjs(item.createdAt).format("DD MMM YYYY, HH:mm")}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Tooltip title="Edit">
                                  <IconButton
                                    size="small"
                                    onClick={() => openEditNotification(item)}
                                  >
                                    <EditIcon fontSize="small" />
                                  </IconButton>
                                </Tooltip>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </NotificationSection>
              </Box>
            </Paper>
          )}

          {activeTab === "whatsapp" && (
            <Paper elevation={0} sx={{ ...panelSx, p: 0 }}>
              <Box
                sx={{
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 2, md: 2.5 },
                  background:
                    "linear-gradient(135deg, #001b3d 0%, #0a3d32 50%, #128C7E 100%)",
                  color: "#fff",
                }}
              >
                <Stack
                  direction={{ xs: "column", lg: "row" }}
                  justifyContent="space-between"
                  alignItems={{ xs: "stretch", lg: "center" }}
                  spacing={2}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        bgcolor: "rgba(255,255,255,0.14)",
                        display: "grid",
                        placeItems: "center",
                      }}
                    >
                      <WhatsAppIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box>
                      <Typography variant="h5" fontWeight={700}>
                        WhatsApp Messaging
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9, mt: 0.5 }}>
                        Configure Twilio, manage templates, and schedule bulk WhatsApp campaigns.
                      </Typography>
                    </Box>
                  </Stack>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.25} flexShrink={0}>
                    <Button
                      variant="outlined"
                      size="medium"
                      startIcon={<SettingsIcon />}
                      onClick={openConfigModal}
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.45)",
                        "&:hover": {
                          borderColor: "#fff",
                          bgcolor: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      Configuration
                    </Button>
                    <Button
                      variant="outlined"
                      size="medium"
                      startIcon={<TemplateIcon />}
                      onClick={() => setTemplateOpen(true)}
                      sx={{
                        color: "#fff",
                        borderColor: "rgba(255,255,255,0.45)",
                        "&:hover": {
                          borderColor: "#fff",
                          bgcolor: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      Add Template
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      startIcon={<SendIcon />}
                      onClick={openCampaignModal}
                      sx={{
                        bgcolor: "#efae4c",
                        color: "#001b3d",
                        fontWeight: 700,
                        "&:hover": { bgcolor: "#f5be6a" },
                      }}
                    >
                      Schedule Campaign
                    </Button>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 2, md: 2.5 },
                  "& > .MuiPaper-root:last-of-type": { mb: 0 },
                  "& > .MuiAccordion-root:last-of-type": { mb: 3 },
                }}
              >
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(2, 1fr)",
                      md: "repeat(4, 1fr)",
                    },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  <StatCard
                    icon={TemplateIcon}
                    label="Templates"
                    value={whatsappStats.templates}
                    accent={`${whatsappStats.activeTemplates} active`}
                  />
                  <StatCard
                    icon={CampaignIcon}
                    label="Campaigns"
                    value={whatsappStats.campaigns}
                    accent="Scheduled & completed"
                    tint="#001b3d"
                  />
                  <StatCard
                    icon={SendIcon}
                    label="Messages sent"
                    value={whatsappStats.messagesSent}
                    accent="Across all campaigns"
                    tint="#128C7E"
                  />
                  <StatCard
                    icon={LogsIcon}
                    label="Delivery logs"
                    value={whatsappStats.logCount}
                    accent="Success & failed"
                    tint="#0a6e4f"
                  />
                </Box>

                <WhatsAppAccordionSection
                  icon={TemplateIcon}
                  title="Message Templates"
                  subtitle="Approved WhatsApp templates synced with Twilio Content SID."
                  defaultExpanded={false}
                >
                  {templatesLoading ? (
                    <Stack alignItems="center" py={4}>
                      <CircularProgress size={28} sx={{ color: WHATSAPP_ACCENT }} />
                    </Stack>
                  ) : templatesError ? (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: "1px solid rgba(211, 47, 47, 0.25)",
                        bgcolor: "rgba(211, 47, 47, 0.04)",
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="body2" color="error" mb={2}>
                        {templatesError}
                      </Typography>
                      <Button variant="outlined" color="primary" onClick={() => loadTemplates()}>
                        Retry loading templates
                      </Button>
                    </Paper>
                  ) : templates.length === 0 ? (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: "1px dashed rgba(18, 140, 126, 0.35)",
                        bgcolor: WHATSAPP_LIGHT,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        No templates yet. Click Add Template to create one.
                      </Typography>
                    </Paper>
                  ) : (
                    <TableContainer sx={whatsappTableContainerSx}>
                      <Table sx={{ tableLayout: "fixed", width: "100%" }}>
                        <TableHead>
                          <TableRow>
                            {["Name", "Body", "Language", "Template SID", "Status"].map(
                              (label) => (
                                <TableCell
                                  key={label}
                                  sx={
                                    label === "Body"
                                      ? { width: "42%" }
                                      : label === "Template SID"
                                        ? { width: "18%" }
                                        : undefined
                                  }
                                >
                                  {label}
                                </TableCell>
                              )
                            )}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {templates.map((tpl) => (
                            <TableRow key={tpl.id} hover>
                              <TableCell sx={{ width: "12%", verticalAlign: "top" }}>
                                <Typography fontWeight={700} color="primary.main">
                                  {tpl.name}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ width: "42%", verticalAlign: "top" }}>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                  component="div"
                                  sx={{
                                    whiteSpace: "pre-wrap",
                                    wordBreak: "break-word",
                                    lineHeight: 1.6,
                                    overflow: "visible",
                                  }}
                                >
                                  {tpl.body}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ verticalAlign: "top" }}>
                                <Chip
                                  size="small"
                                  label={(tpl.language || "en").toUpperCase()}
                                  variant="outlined"
                                  sx={{ fontWeight: 600 }}
                                />
                              </TableCell>
                              <TableCell sx={{ verticalAlign: "top" }}>
                                <Typography
                                  variant="body2"
                                  sx={{
                                    fontFamily: "monospace",
                                    color: "text.secondary",
                                    wordBreak: "break-all",
                                  }}
                                >
                                  {tpl.templateSid || "—"}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ verticalAlign: "top" }}>
                                <Chip
                                  size="small"
                                  label={tpl.isActive ? "Active" : "Inactive"}
                                  color={tpl.isActive ? "success" : "default"}
                                  variant={tpl.isActive ? "filled" : "outlined"}
                                  sx={{ fontWeight: 600 }}
                                />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </WhatsAppAccordionSection>

                <WhatsAppAccordionSection
                  icon={CampaignIcon}
                  title="Campaign History"
                  subtitle="Track scheduled bulk sends and delivery progress."
                  defaultExpanded={false}
                >
                  {campaignsLoading ? (
                    <Stack alignItems="center" py={4}>
                      <CircularProgress size={28} sx={{ color: WHATSAPP_ACCENT }} />
                    </Stack>
                  ) : campaigns.length === 0 ? (
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 2,
                        border: "1px dashed rgba(18, 140, 126, 0.35)",
                        bgcolor: WHATSAPP_LIGHT,
                        textAlign: "center",
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        No campaigns yet. Click Schedule Campaign to create one.
                      </Typography>
                    </Paper>
                  ) : (
                    <TableContainer
                      sx={{
                        ...whatsappTableContainerSx,
                        maxHeight: 320,
                        overflow: "auto",
                      }}
                    >
                      <Table stickyHeader>
                        <TableHead>
                          <TableRow>
                            {[
                              "Status",
                              "Scheduled",
                              "Recipients",
                              "Sent",
                              "Failed",
                              "Template",
                            ].map((label) => (
                              <TableCell key={label}>{label}</TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {campaigns.map((c) => (
                            <TableRow key={c.id} hover>
                              <TableCell>
                                <CampaignStatusChip status={c.status} />
                              </TableCell>
                              <TableCell sx={{ whiteSpace: "nowrap" }}>
                                <Typography variant="body2" fontWeight={500}>
                                  {dayjs(c.scheduledAt).format("DD MMM YYYY, HH:mm")}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography variant="body2" fontWeight={700}>
                                  {c.totalCount}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography
                                  variant="body2"
                                  fontWeight={700}
                                  color="success.main"
                                >
                                  {c.sentCount}
                                </Typography>
                              </TableCell>
                              <TableCell>
                                <Typography
                                  variant="body2"
                                  fontWeight={700}
                                  color={c.failedCount > 0 ? "error.main" : "text.secondary"}
                                >
                                  {c.failedCount}
                                </Typography>
                              </TableCell>
                              <TableCell sx={{ maxWidth: 280 }}>
                                <Typography variant="body2" fontWeight={600}>
                                  {c.templateName || c.contentSid || "—"}
                                </Typography>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  )}
                </WhatsAppAccordionSection>

                <WhatsAppSection
                  icon={LogsIcon}
                  title="Delivery Logs"
                  subtitle="Per-recipient Twilio delivery status after each campaign run."
                >
                  <Box id="twilio-message-logs" sx={{ height: 400, width: "100%" }}>
                    {messageLogsLoading ? (
                      <Stack
                        alignItems="center"
                        justifyContent="center"
                        height="100%"
                        sx={{
                          borderRadius: 2,
                          border: "1px solid rgba(18, 140, 126, 0.14)",
                          bgcolor: "#fff",
                        }}
                      >
                        <CircularProgress sx={{ color: WHATSAPP_ACCENT }} />
                      </Stack>
                    ) : messageLogs.length === 0 ? (
                      <Box
                        sx={{
                          height: "100%",
                          borderRadius: 2,
                          border: "1px dashed rgba(18, 140, 126, 0.35)",
                          bgcolor: WHATSAPP_LIGHT,
                        }}
                      >
                        <EmptyState
                          title="No delivery logs yet"
                          description="Schedule a campaign to see SUCCESS / FAILED logs for each recipient."
                        />
                      </Box>
                    ) : (
                      <DataGrid
                        rows={messageLogs}
                        columns={[
                          {
                            field: "phoneNumber",
                            headerName: "Phone",
                            width: 155,
                            renderCell: (params) => (
                              <Typography variant="body2" fontWeight={600}>
                                {params.value}
                              </Typography>
                            ),
                          },
                          {
                            field: "status",
                            headerName: "Status",
                            width: 120,
                            renderCell: (params) => (
                              <Chip
                                size="small"
                                label={params.value}
                                color={params.value === "SUCCESS" ? "success" : "error"}
                                variant="filled"
                                sx={{ fontWeight: 700 }}
                              />
                            ),
                          },
                          {
                            field: "contentSid",
                            headerName: "Template",
                            flex: 1,
                            minWidth: 160,
                            valueGetter: (_v, row) =>
                              row.templateName || row.contentSid || "—",
                          },
                          {
                            field: "twilioSid",
                            headerName: "Twilio SID",
                            width: 190,
                            valueGetter: (_v, row) => row.twilioSid || "—",
                            renderCell: (params) => (
                              <Typography
                                variant="body2"
                                sx={{ fontFamily: "monospace", wordBreak: "break-all" }}
                              >
                                {params.value}
                              </Typography>
                            ),
                          },
                          {
                            field: "errorMessage",
                            headerName: "Error",
                            flex: 1,
                            minWidth: 160,
                            valueGetter: (_v, row) => row.errorMessage || "—",
                            renderCell: (params) => (
                              <Typography
                                variant="body2"
                                color={
                                  params.value && params.value !== "—"
                                    ? "error.main"
                                    : "text.secondary"
                                }
                              >
                                {params.value}
                              </Typography>
                            ),
                          },
                          {
                            field: "createdAt",
                            headerName: "Time",
                            width: 170,
                            valueFormatter: (value) =>
                              dayjs(value).format("DD MMM YYYY, HH:mm"),
                          },
                        ]}
                        getRowId={(row) => row.id}
                        pageSizeOptions={[8, 16, 32]}
                        initialState={{
                          pagination: { paginationModel: { pageSize: 8 } },
                        }}
                        disableRowSelectionOnClick
                        sx={whatsappDataGridSx}
                      />
                    )}
                  </Box>
                </WhatsAppSection>
              </Box>
            </Paper>
          )}
        </Container>

        <Dialog
          open={addNotificationOpen}
          onClose={closeNotificationModal}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
            {editingNotificationId ? "Edit Notification" : "Add Notification"}
          </DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary" mb={2.5}>
              Fill in all fields below. Homepage popup shows only valid
              notifications whose Valid upto date has not passed.
            </Typography>
            <Stack spacing={2.25}>
              <TextField
                label="Title"
                fullWidth
                required
                value={notificationForm.title}
                onChange={updateNotificationField("title")}
              />
              <TextField
                label="Subtitle"
                fullWidth
                required
                value={notificationForm.subtitle}
                onChange={updateNotificationField("subtitle")}
              />
              <TextField
                label="Info"
                fullWidth
                required
                multiline
                minRows={3}
                value={notificationForm.info}
                onChange={updateNotificationField("info")}
              />
              <TextField
                label="Disclaimer"
                fullWidth
                required
                multiline
                minRows={3}
                value={notificationForm.disclaimer}
                onChange={updateNotificationField("disclaimer")}
              />
              <TextField
                label="Terms and Conditions"
                fullWidth
                required
                multiline
                minRows={4}
                value={notificationForm.termsAndConditions}
                onChange={updateNotificationField("termsAndConditions")}
              />
              <DatePicker
                label="Valid upto"
                value={notificationForm.validUntil}
                onChange={(value) =>
                  setNotificationForm((prev) => ({
                    ...prev,
                    validUntil: value,
                  }))
                }
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={notificationForm.isValid}
                    onChange={(e) =>
                      setNotificationForm((prev) => ({
                        ...prev,
                        isValid: e.target.checked,
                      }))
                    }
                    color="secondary"
                  />
                }
                label="Valid (show on homepage popup)"
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
            <Button onClick={closeNotificationModal}>Cancel</Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSaveNotification}
              disabled={savingNotification}
              sx={{ minWidth: 120 }}
            >
              {savingNotification
                ? "Saving..."
                : editingNotificationId
                  ? "Update"
                  : "Save"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={Boolean(disableTarget)}
          onClose={() => setDisableTarget(null)}
          fullWidth
          maxWidth="xs"
        >
          <DialogTitle sx={{ fontWeight: 700 }}>Disable notification?</DialogTitle>
          <DialogContent>
            <Typography variant="body2" color="text.secondary">
              {disableTarget
                ? `“${disableTarget.title}” will be marked invalid and hidden from the homepage popup.`
                : ""}
            </Typography>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={() => setDisableTarget(null)}>Cancel</Button>
            <Button
              variant="contained"
              color="error"
              onClick={confirmDisableNotification}
              disabled={disabling}
            >
              {disabling ? "Disabling..." : "Disable"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={configOpen}
          onClose={() => setConfigOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <SettingsIcon sx={{ color: WHATSAPP_ACCENT }} />
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  WhatsApp Configuration
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Twilio credentials for sending messages
                </Typography>
              </Box>
            </Stack>
          </DialogTitle>
          <DialogContent>
            {configHint && (
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                mb={2}
              >
                {configHint}
              </Typography>
            )}
            <Stack spacing={2.5} sx={{ mt: 1 }}>
              <TextField
                label="Auth Token"
                fullWidth
                type="password"
                value={configForm.authToken}
                onChange={(e) =>
                  setConfigForm((prev) => ({
                    ...prev,
                    authToken: e.target.value,
                  }))
                }
              />
              <TextField
                label="SID"
                fullWidth
                value={configForm.sid}
                onChange={(e) =>
                  setConfigForm((prev) => ({
                    ...prev,
                    sid: e.target.value,
                  }))
                }
              />
              <TextField
                label="Phone Number"
                fullWidth
                placeholder="+91XXXXXXXXXX"
                value={configForm.phoneNumber}
                onChange={(e) =>
                  setConfigForm((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }))
                }
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={() => setConfigOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSaveConfig}
              disabled={savingConfig}
            >
              {savingConfig ? "Saving..." : "Save Configuration"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={sendOpen}
          onClose={() => setSendOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ fontWeight: 700 }}>
            Send WhatsApp Message
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2.5} sx={{ mt: 1 }}>
              <TextField
                label="Recipient phone"
                placeholder="+91XXXXXXXXXX"
                fullWidth
                value={sendForm.to}
                onChange={(e) =>
                  setSendForm((prev) => ({ ...prev, to: e.target.value }))
                }
              />
              <TextField
                label="Message"
                fullWidth
                multiline
                minRows={4}
                value={sendForm.message}
                onChange={(e) =>
                  setSendForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button onClick={() => setSendOpen(false)}>Cancel</Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SendIcon />}
              onClick={handleSendMessage}
              disabled={sendingMessage}
            >
              {sendingMessage ? "Sending..." : "Send"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={campaignOpen}
          onClose={() => {
            setCampaignOpen(false);
            setCampaignForm(EMPTY_CAMPAIGN_FORM);
          }}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <WhatsAppIcon sx={{ color: WHATSAPP_ACCENT }} />
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Schedule WhatsApp Campaign
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Bulk send to uploaded or pasted phone numbers
                </Typography>
              </Box>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2.5} sx={{ mt: 0.5 }}>
              <Chip
                icon={<WhatsAppIcon />}
                label="WhatsApp"
                size="small"
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: WHATSAPP_LIGHT,
                  color: WHATSAPP_ACCENT,
                  fontWeight: 700,
                  "& .MuiChip-icon": { color: WHATSAPP_ACCENT },
                }}
              />

              <DateTimePicker
                label="Scheduled at"
                value={campaignForm.scheduledAt}
                onChange={(value) =>
                  setCampaignForm((prev) => ({ ...prev, scheduledAt: value }))
                }
                slotProps={{ textField: { fullWidth: true, required: true } }}
              />

              <FormControl fullWidth required disabled={templatesLoading}>
                <InputLabel id="template-label">WhatsApp template</InputLabel>
                <Select
                  labelId="template-label"
                  label="WhatsApp template"
                  value={campaignForm.contentSid}
                  onChange={(e) => {
                    const sid = e.target.value;
                    const tpl = templates.find((t) => t.templateSid === sid);
                    setCampaignForm((prev) => ({
                      ...prev,
                      contentSid: sid,
                      templateName: tpl?.name || "",
                    }));
                  }}
                >
                  {templatesLoading ? (
                    <MenuItem disabled value="">
                      Loading templates...
                    </MenuItem>
                  ) : campaignTemplateOptions.length === 0 ? (
                    <MenuItem disabled value="">
                      No active templates available
                    </MenuItem>
                  ) : (
                    campaignTemplateOptions.map((t) => (
                      <MenuItem key={t.id} value={t.templateSid}>
                        {t.name}
                      </MenuItem>
                    ))
                  )}
                </Select>
              </FormControl>
              {!templatesLoading && campaignTemplateOptions.length === 0 ? (
                <Typography variant="caption" color="error" display="block">
                  Add an active template with a Template SID under Message Templates,
                  or tap Retry if templates failed to load.
                </Typography>
              ) : null}

              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  border: "1px solid rgba(18, 140, 126, 0.16)",
                  bgcolor: WHATSAPP_LIGHT,
                }}
              >
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  alignItems={{ xs: "stretch", sm: "center" }}
                  justifyContent="space-between"
                  spacing={1.5}
                  mb={1.25}
                >
                  <Typography variant="subtitle2" fontWeight={700} color="primary">
                    Recipients
                  </Typography>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<UploadFileIcon />}
                    onClick={() => csvInputRef.current?.click()}
                    sx={{
                      borderColor: WHATSAPP_ACCENT,
                      color: WHATSAPP_ACCENT,
                      "&:hover": {
                        borderColor: WHATSAPP_ACCENT,
                        bgcolor: "rgba(18, 140, 126, 0.08)",
                      },
                    }}
                  >
                    Upload CSV
                  </Button>
                  <input
                    ref={csvInputRef}
                    type="file"
                    accept=".csv,text/csv"
                    hidden
                    onChange={handleCsvUpload}
                  />
                </Stack>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={1.5}
                  sx={{ lineHeight: 1.65 }}
                >
                  CSV: column A = mobile numbers. Row 1 (A1) is a header and is
                  ignored. Example — A1:{" "}
                  <Box component="span" sx={{ fontFamily: "monospace" }}>
                    mobile
                  </Box>
                  , A2:{" "}
                  <Box component="span" sx={{ fontFamily: "monospace" }}>
                    9876543210
                  </Box>
                  .
                </Typography>
                <TextField
                  label="Phone numbers"
                  fullWidth
                  required
                  multiline
                  minRows={4}
                  placeholder={"9876543210\n9123456789"}
                  value={campaignForm.phonesText}
                  onChange={(e) =>
                    setCampaignForm((prev) => ({
                      ...prev,
                      phonesText: e.target.value,
                    }))
                  }
                  helperText="One number per line. 10-digit numbers get +91."
                  sx={{ bgcolor: "#fff", borderRadius: 1.5 }}
                />
              </Box>
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5, pt: 1 }}>
            <Button
              onClick={() => {
                setCampaignOpen(false);
                setCampaignForm(EMPTY_CAMPAIGN_FORM);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<SendIcon />}
              onClick={handleScheduleCampaign}
              disabled={savingCampaign}
            >
              {savingCampaign ? "Scheduling..." : "Schedule Campaign"}
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={templateOpen}
          onClose={() => {
            setTemplateOpen(false);
            setTemplateForm(EMPTY_TEMPLATE_FORM);
          }}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
            <Stack direction="row" spacing={1.25} alignItems="center">
              <TemplateIcon sx={{ color: WHATSAPP_ACCENT }} />
              <Box>
                <Typography variant="h6" fontWeight={700}>
                  Add WhatsApp Template
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Map a Twilio Content SID to a friendly name
                </Typography>
              </Box>
            </Stack>
          </DialogTitle>
          <DialogContent>
            <Stack spacing={2.5} sx={{ mt: 1 }}>
              <TextField
                label="Name"
                fullWidth
                required
                value={templateForm.name}
                onChange={(e) =>
                  setTemplateForm((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <TextField
                label="Body"
                fullWidth
                required
                multiline
                minRows={4}
                value={templateForm.body}
                onChange={(e) =>
                  setTemplateForm((prev) => ({ ...prev, body: e.target.value }))
                }
              />
              <TextField
                label="Language"
                fullWidth
                value={templateForm.language}
                onChange={(e) =>
                  setTemplateForm((prev) => ({
                    ...prev,
                    language: e.target.value,
                  }))
                }
              />
              <TextField
                label="Template SID"
                fullWidth
                value={templateForm.templateSid}
                onChange={(e) =>
                  setTemplateForm((prev) => ({
                    ...prev,
                    templateSid: e.target.value,
                  }))
                }
              />
            </Stack>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2.5 }}>
            <Button
              onClick={() => {
                setTemplateOpen(false);
                setTemplateForm(EMPTY_TEMPLATE_FORM);
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSaveTemplate}
              disabled={savingTemplate}
            >
              {savingTemplate ? "Saving..." : "Save Template"}
            </Button>
          </DialogActions>
        </Dialog>

        {toast && (
          <Paper
            elevation={6}
            sx={{
              position: "fixed",
              bottom: 24,
              right: 24,
              px: 2.5,
              py: 1.5,
              bgcolor: toast.severity === "error" ? "#7f1d1d" : "#001b3d",
              color: "#fff",
              borderRadius: 2,
              zIndex: 1400,
            }}
          >
            <Typography variant="body2" fontWeight={600}>
              {toast.text}
            </Typography>
          </Paper>
        )}
      </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
};

export default DashboardPage;
