"use client";

import { sendMail } from "@/app/actions/email.action";
import { useTranslations } from "next-intl";
import { FormEvent, useState } from "react";

export default function ContactForm() {
    const t = useTranslations("homepage");
    const [isSending, setIsSending] = useState(false);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSending(true);
        const target = e.currentTarget;
        const formData = new FormData(target);
        await sendMail(formData);
        target.reset();
        setIsSending(false);
    };

    return (
        <form className="card-body gap-1 lg:p-0 lg:pr-6 lg:w-full" onSubmit={onSubmit}>
            <div className="form-control">
                <input
                    type="email"
                    name="email"
                    placeholder={t("form.email")}
                    className="input max-w-[80vw] max-h-8 text-sm bg-transparent border-2 focus:border-white focus:outline-none border-white placeholder:text-white"
                    required
                />
            </div>
            <div className="form-control">
                <input
                    type="text"
                    name="subject"
                    placeholder={t("form.object")}
                    className="input max-w-[80vw] max-h-8 text-sm bg-transparent border-2 focus:border-white focus:outline-none border-white placeholder:text-white"
                    required
                />
            </div>
            <div className="form-control">
                <textarea
                    placeholder={t("form.message")}
                    name="message"
                    className="input max-w-[80vw] max-h-10 text-sm bg-transparent border-2 border-white focus:border-white focus:outline-none placeholder:text-white py-2 resize-none overflow-auto"
                    required
                />
            </div>
            <div className="form-control">
                <label className="label cursor-pointer gap-2 justify-start">
                    <input type="checkbox" name="gdpr" className="checkbox border-white border-2" />
                    <span className="label-text text-white flex flex-col">{t("form.agreeText")}</span>
                </label>
            </div>
            <div className="form-control max-h-7">
                <button type="submit" className="btn max-h-8 min-h-8 bg-[#70785E] text-white">
                    {!isSending ? t("form.send") : <span className="loading loading-spinner loading-sm"></span>}
                </button>
            </div>
        </form>
    );
}
