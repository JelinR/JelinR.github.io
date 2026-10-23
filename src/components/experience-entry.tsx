import { Experience } from "@/data/experience";

export function ExperienceEntry({ experience }: { experience: Experience }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-sm text-zinc-500 mt-1">{experience.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-lg font-serif">
          {experience.title}
        </h3>
        <p className="text-base text-zinc-500 mt-1">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              className="hover:text-zinc-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.company}
            </a>
          ) : (
            experience.company
          )}
        </p>
        {experience.advisor && (
          <p className="text-base text-zinc-600 leading-relaxed italic mt-3">
            Guided by: {experience.advisor}
          </p>
        )}
        {experience.manager && (
          <p className="text-base text-zinc-600 leading-relaxed italic mt-2">
            Manager: {experience.manager}
          </p>
        )}
        {experience.description && (
          <p className="text-base text-zinc-600 leading-relaxed mt-5">
            {experience.description}
          </p>
        )}
      </div>
    </div>
  );
}
