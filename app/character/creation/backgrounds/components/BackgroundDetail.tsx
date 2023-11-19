import { Background, backgrounds, skills } from "@/data/data"
import { useStore } from "../state"
import BackgroundDetailSection from "./BackgroundDetailSection"

export default function BackgroundDetail() {
    const { detailBackground } = useStore()

    let background: Background | undefined = backgrounds.find(background => background.name == detailBackground)

    if (background == undefined) return

    return (
        <div className="m-2">

            <BackgroundDetailSection rows={1} columns={3} skills={background.skills.free.map(e => e.name)} title="Free Skill" />
            <BackgroundDetailSection rows={3} columns={1} skills={background.skills.quick.map(e => e.name)} title="Predifined" />
            <BackgroundDetailSection rows={2} columns={4} skills={background.skills.learning.map(e => e.name)} title="Choose" />
            <div className="my-4">
                <h1 className="font-orbitron font-bold uppercase tracking-widest text-2xl p-4">Random</h1>
                <hr />
                <BackgroundDetailSection rows={2} columns={4} skills={background.skills.learning.map(e => e.name)} thead="Learning" />
                <BackgroundDetailSection rows={2} columns={3} skills={background.skills.growth.map(e => e.name)} thead="Growth" />
            </div>
        </div>
    )
}