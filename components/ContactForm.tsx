"use client";

import { sendMail } from "@/app/actions/email.action";
import { FormEvent } from "react";

export default function ContactForm() {
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.currentTarget;
        const formData = new FormData(target);
        await sendMail(formData);
        target.reset();
    };

    return (
        <form className="card-body" onSubmit={onSubmit}>
            <div className="form-control">
                <input type="email" name="email" placeholder="Kontaktní email" className="input input-bordered bg-white" required />
            </div>
            <div className="form-control">
                <input type="text" name="subject" placeholder="Předmět" className="input input-bordered bg-white" required />
            </div>
            <div className="form-control">
                <textarea placeholder="Zpráva" name="message" className="input input-bordered bg-white h-32 py-2 resize-none scroll-" required />
            </div>
            <div className="form-control">
                <label className="label cursor-pointer flex gap-1">
                    <input type="checkbox" name="gdpr" className="checkbox checkbox-primary" />
                    <span className="label-text text-nowrap flex flex-col">Souhlasím se zpracováním osobních údajů. </span>
                </label>
            </div>
            <div className="form-control mt-5">
                <button type="submit" className="btn btn-primary">
                    Odeslat
                </button>
            </div>
        </form>
    );
}
