import { getPricingPlan, planPricingLookup } from "@/utils/pricingMapping";
import { expect, describe, test } from "vitest";

describe('pricingMapping', () => {
    test('should lookup value correctly base on trip type, plan, area, duration', () => {
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 15})).toEqual(92)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 31})).toEqual(183)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'essential', duration: 15})).toEqual(120)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'preferred', duration: 15})).toEqual(151)

        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 'each-week'})).toEqual(33)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'essential', duration: 'each-week'})).toEqual(43)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'preferred', duration: 'each-week'})).toEqual(55)

        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 'annual'})).toEqual(0)
        expect(planPricingLookup({tripType: 'single', area: 'area2', insuredType: 'individual',  plan: 'essential', duration: 'annual'})).toEqual(503)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'essential', duration: 'annual'})).toEqual(0)
        expect(planPricingLookup({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'preferred', duration: 'annual'})).toEqual(0)
    })
})

describe('getPricingPlan', () => {
    test('the pricing plan value should be correct base on trip type, plan, area, duration and number of insureds', () => {
        expect(getPricingPlan({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 75, numberOfInsureds: 1})).toEqual(414)
        expect(getPricingPlan({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 75, numberOfInsureds: 2})).toEqual(414 * 2)
        expect(getPricingPlan({tripType: 'single', area: 'area1', insuredType: 'individual', plan: 'basic', duration: 75, numberOfInsureds: 8})).toEqual(414 * 8)
    })
})