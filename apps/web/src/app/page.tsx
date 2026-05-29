import { Navbar } from "@/components/navbar";
import { About } from "@/components/sections/about";
import { BlueTeam } from "@/components/sections/blue-team";
import { CTA } from "@/components/sections/cta";
import { Differentials } from "@/components/sections/differentials";
import { SiteFooter } from "@/components/sections/footer";
import { Hero } from "@/components/sections/hero";
import { Investigation } from "@/components/sections/investigation";
import { RedTeam } from "@/components/sections/red-team";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="relative">
				<Hero />
				<About />
				<BlueTeam />
				<RedTeam />
				<Investigation />
				<Differentials />
				<CTA />
			</main>
			<SiteFooter />
		</>
	);
}
