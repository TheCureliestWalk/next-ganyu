export default function header() {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Quest/Bounty",
      link: "/quests",
    },
    {
      name: "Character",
      link: "/characters",
    },
    {
      name: "Settings",
      link: "/settings",
    },
  ];
  return (
    <div className="p-4 bg-gradient-to-r from-slate-700 to-slate-900 flex flex-col md:flex-row justify-between shadow text-white">
      <h1 className="text-2xl font-bold">
        <a className="hover:text-sky-500 duration-200" href="/">
          Ganyu
        </a>
      </h1>
      <ul className="flex items-center flex-col md:flex-row">
        {menus.map((item, index) => (
          <li key={index}>
            <a
              className="px-2 hover:text-amber-500 hover:bg-gray-900 duration-100 delay-75"
              href={item.link}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
