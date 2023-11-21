class PlanPage {
get planPageHeader () {return $('.d-none.d-md-block.mt-0.mb-3.text-center.h1.lh-condensed-ultra')}
get enterpriseCloudLink () {return $('.rounded-3.px-2.pt-5.pb-2.pricing-recommended-plan')} 

async clickCloudPlan () {
    await this.enterpriseCloudLink.click()
}

}
export default new PlanPage()