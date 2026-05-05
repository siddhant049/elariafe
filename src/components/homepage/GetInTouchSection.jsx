import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import { sendConsultationRequest } from "../../utils/emailjs";

const GetInTouchSection = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    setSubmitting(true);

    try {
      await sendConsultationRequest(values);
      message.success(
        "Thank you! Our team will call you back shortly to discuss your concerns."
      );
      form.resetFields();
    } catch (error) {
      message.error(
        error?.message ||
          "We could not send your request right now. Please try again in a moment."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="relative overflow-hidden bg-[#10233f] px-6 py-16 lg:py-18">
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "110px 110px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-7 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
        <div className="text-white">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#d6b384]">
            Get In Touch
          </p>
          <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.03em] md:text-4xl">
            Tell us your concern and we will guide you personally.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-white/72">
            Share your details and our clinic team will call you back to help
            you understand which treatments fit your goals best.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              "Quick callback from our care team",
              "Guidance on categories and suitable treatments",
              "No pressure, only honest recommendations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] bg-[#fbf8f4] p-6 shadow-[0_28px_70px_rgba(0,0,0,0.18)] md:p-7">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
            Consultation Request
          </p>
          <h3 className="mt-3 text-[1.35rem] font-medium text-[#10233f]">
            Request a call back
          </h3>
          <p className="mb-4 mt-2.5 text-sm leading-6 text-slate-500">
            Fill in your basic details and select the category you are
            interested in.
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
            className="[&_.ant-form-item]:mb-4 [&_.ant-form-item-label>label]:text-sm [&_.ant-input]:py-2 [&_.ant-select-selector]:py-1"
          >
            <Form.Item
              name="name"
              label="Full Name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" size="large" />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input placeholder="+91 XXXXX XXXXX" size="large" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email ID"
              rules={[{ required: true, message: "Please enter your emailId" }]}
            >
              <Input placeholder="test@gmail.com" size="large" />
            </Form.Item>

            <Form.Item
              name="category"
              label="Service category you're interested in"
              rules={[
                { required: true, message: "Please select a service category" },
              ]}
            >
              <Select
                placeholder="Select a category"
                size="large"
                options={[
                  { value: "hair", label: "Hair" },
                  { value: "skin", label: "Skin" },
                  { value: "acne-scars", label: "Acne & Scars" },
                  { value: "under-eye", label: "Under Eye" },
                  { value: "pigmentation", label: "Pigmentation" },
                  { value: "medifacial", label: "Medifacial" },
                  { value: "anti-aging", label: "Anti-aging" },
                  { value: "laser", label: "Laser" },
                  { value: "body-contouring", label: "Body Contouring" },
                  { value: "ayurveda", label: "Ayurveda" },
                  { value: "other", label: "Not sure / Other" },
                ]}
              />
            </Form.Item>

            <Form.Item name="notes" label="Any specific concern (optional)">
              <Input.TextArea
                rows={2}
                placeholder="Tell us briefly what you'd like help with..."
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              className="mt-1 h-11 w-full border-none bg-[#efae4c] font-semibold text-[#001b3d] hover:bg-[#d89b3e]"
              size="large"
            >
              Request call back
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
