import { implementationCalculateBiorhythm } from "../Utils/calculations"

it('calculate physical biorhythm', () => {
    const { physical } = implementationCalculateBiorhythm('1992-01-02', '2022-08-31');
    expect(physical).toBeCloseTo(-0.5196)
})

it('calculate emotional biorhythm', () => {
    const { emotional } = implementationCalculateBiorhythm('1992-01-02', '2022-08-31');
    expect(emotional).toBeCloseTo(-0.2225)
})

it('calculate intellectual biorhythm', () => {
    const { intellectual } = implementationCalculateBiorhythm('1992-01-02', '2022-08-31');
    expect(intellectual).toBeCloseTo(0.7557)
})