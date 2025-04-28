type EventCardProps = {
  date: string;
  title: string;
  location: string;
  description: string;
  buttons?: Array<{
    text: string;
    href: string;
  }>;
};

export default function EventCard({ date, title, location, description, buttons }: EventCardProps) {
  return (
    <div className="rounded-[24px] overflow-hidden bg-white shadow-lg max-w-sm mx-auto w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="p-6 bg-[#f5ce81] rounded-t-[24px] min-h-[160px] flex flex-col">
        <div className="text-lg">{date}</div>
        <h3 className="font-bold text-[24px] leading-7 mt-1">{title}</h3>
        <p className="text-gray-700 m-0 p-0">{location}</p>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 mt-0">{description}</p>
        {buttons && (
          <div className="flex gap-2">
            {buttons.map(button => (
              <a
                key={button.text}
                className="bg-[#f5ce81] text-gray-800 px-6 py-2 rounded-[32px] hover:bg-[#f3d494] transition-colors font-ppwriter"
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
