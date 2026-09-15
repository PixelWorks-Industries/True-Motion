import { useState, type FormEvent } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { MaskedLines } from '@/components/motion/MaskedText';
import { Button } from '@/components/ui/Button';
import { SectionMeta } from '@/components/ui/SectionMeta';

const projectTypes = [
  'Web design',
  'Redesign',
  'E-commerce',
  'Identity',
  'Motion',
  'Custom',
];
const budgets = ['Under $5k', '$5k–$15k', '$15k–$30k', '$30k+', 'Not sure yet'];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'That email does not look right.';
    if (!form.description.trim()) e.description = 'Tell us a bit about the project.';
    return e;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  if (submitted) {
    return (
      <section className="pt-[calc(var(--nav-height)+5rem)] pb-20 md:pb-32 min-h-[70vh] flex items-center">
        <div className="container-grid">
          <SectionMeta label="Contact" className="mb-8" />
          <Reveal delay={80}>
            <h1 className="text-display text-foreground max-w-[12ch]">Received.</h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 text-muted max-w-md leading-relaxed">
              Thanks for writing. We will review what you sent and get back to you shortly.
            </p>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-[calc(var(--nav-height)+4.5rem)] md:pt-[calc(var(--nav-height)+6rem)] pb-20 md:pb-32">
      <div className="container-grid">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-14 md:mb-20">
          <div className="md:col-span-8">
            <SectionMeta number="05" label="Contact" className="mb-7" />
            <h1 className="text-display text-foreground">
              <MaskedLines lines={['Tell us what', "you're making."]} />
            </h1>
          </div>
          <div className="md:col-span-4 md:flex md:items-end">
            <Reveal delay={180}>
              <p className="text-muted leading-relaxed md:text-right">
                Start with the work. If it is a fit, we will talk about how to begin.
              </p>
            </Reveal>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-8" noValidate>
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-7">
              <Field
                label="Name"
                required
                error={errors.name}
                value={form.name}
                onChange={(v) => update('name', v)}
              />
              <Field
                label="Email"
                type="email"
                required
                error={errors.email}
                value={form.email}
                onChange={(v) => update('email', v)}
              />
              <Field label="Company" value={form.company} onChange={(v) => update('company', v)} />
              <SelectField
                label="Project type"
                options={projectTypes}
                value={form.projectType}
                onChange={(v) => update('projectType', v)}
              />
              <SelectField
                label="Budget"
                options={budgets}
                value={form.budget}
                onChange={(v) => update('budget', v)}
              />
            </div>

            <div className="mt-7">
              <label htmlFor="description" className="text-label text-muted block mb-2">
                Brief <span className="text-foreground/40">*</span>
              </label>
              <textarea
                id="description"
                rows={5}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                className="field resize-none"
                placeholder="What are you working on?"
              />
              {errors.description && <p className="mt-2 text-sm">{errors.description}</p>}
            </div>

            <Button type="submit" variant="primary" className="mt-10">
              Send the brief
            </Button>
          </div>

          <aside className="md:col-span-4 md:col-start-9 pt-2">
            <p className="text-label text-muted mb-4">Direct</p>
            <a href="mailto:hello@truemotion.studio" className="link-line text-sm">
              hello@truemotion.studio
            </a>
            <p className="text-sm text-muted mt-8 leading-relaxed">
              We take on a limited number of projects. A clear brief helps us respond quickly.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = 'text',
  required = false,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  const id = label.toLowerCase().replace(/\s/g, '-');
  return (
    <div>
      <label htmlFor={id} className="text-label text-muted block mb-2">
        {label} {required && <span className="text-foreground/40">*</span>}
      </label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="field" />
      {error && <p className="mt-2 text-sm">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const id = label.toLowerCase().replace(/\s/g, '-');
  return (
    <div>
      <label htmlFor={id} className="text-label text-muted block mb-2">
        {label}
      </label>
      <select id={id} value={value} onChange={(e) => onChange(e.target.value)} className="field appearance-none cursor-pointer">
        <option value="" className="bg-background">
          Select
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-background">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
