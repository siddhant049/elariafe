import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";

const GetInTouchSection = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    setSubmitting(true);

    // Here you would normally send data to your backend / CRM
    setTimeout(() => {
      message.success(
        "Thank you! Our team will call you back shortly to discuss your concerns."
      );
      form.resetFields();
      setSubmitting(false);
    }, 800);
  };

  return (
    <section className="bg-[#10233f] px-6 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div className="text-white">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#d6b384]">
            Get In Touch
          </p>
          <h2 className="mt-5 text-4xl font-light leading-tight tracking-[-0.03em] md:text-5xl">
            Tell us your concern and we will guide you personally.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
            Share your details and our clinic team will call you back to help
            you understand which treatments fit your goals best.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Quick callback from our care team",
              "Guidance on categories and suitable treatments",
              "No pressure, only honest recommendations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-white/75"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] bg-[#fbf8f4] p-8 shadow-[0_28px_70px_rgba(0,0,0,0.18)] md:p-10">
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#9a7b52]">
            Consultation Request
          </p>
          <h3 className="mt-4 text-2xl font-medium text-[#10233f]">
            Request a call back
          </h3>
          <p className="mb-6 mt-3 text-sm leading-7 text-slate-500">
            Fill in your basic details and select the category you are
            interested in.
          </p>

          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            requiredMark={false}
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
                  { value: "other", label: "Not sure / Other" },
                ]}
              />
            </Form.Item>

            <Form.Item name="notes" label="Any specific concern (optional)">
              <Input.TextArea
                rows={3}
                placeholder="Tell us briefly what you'd like help with..."
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={submitting}
              className="w-full bg-[#efae4c] hover:bg-[#d89b3e] border-none h-12 font-semibold text-[#001b3d] mt-2"
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
