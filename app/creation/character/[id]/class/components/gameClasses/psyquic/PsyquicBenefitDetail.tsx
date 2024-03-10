import { Button } from "@nextui-org/react"

export default function PsychicBenefitDetail() {
  return (
    <div className="w-full h-full p-5 flex flex-col">
      <div className="flex flex-row">
        <h1 className="mb-6">TECHNIQUE NAME</h1>
        <div className="ml-auto">Available CSP 5/5</div>
      </div>
      <div>
        The biopsion’s Psychic Succor may now also affect all allies within ten
        meters of the target. Allies can decline the healing if they don’t
        require it or don’t want to take the additional System Strain.
      </div>
      <br />
      <div>
        Each use of this technique requires that the biopsion Commit Effort for
        the day in addition to the cost of the Psychic Succor.
      </div>
      <br />
      <div>
        <ul>
          <li>Cost: 3 CSPs</li>
          <li>Skill Type: Passive</li>
          <li>Commitment: All Effort points until the end of the day</li>
        </ul>
      </div>
      <br />
      <div className="flex flex-row justify-center gap-4 mt-auto mb-8">
        <Button color="danger">Sell Technique</Button>
        <Button color="success">Buy Technique</Button>
      </div>
    </div>
  )
}
