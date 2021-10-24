import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UsersIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
const ICONS = [
  { title: "HOME", icon: HomeIcon },
  { title: "TRENDING", icon: LightningBoltIcon },
  { title: "VERIFIED", icon: BadgeCheckIcon },
  { title: "COLLECTIONS", icon: CollectionIcon },
  { title: "SEARCH", icon: SearchIcon },
  { title: "ACCOUNT", icon: UsersIcon },
];
function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center h-auto m-5">
      <div className="flex justify-evenly flex-grow-2 max-w-2xl">
        {ICONS.map((icon, index) => (
          <HeaderItem key={index} Icon={icon.icon} title={icon.title} />
        ))}
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />
    </header>
  );
}

export default Header;
