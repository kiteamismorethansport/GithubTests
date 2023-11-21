class RepositoriesPage {
    get searchLink () {return $('.Text-sc-17v1xeu-0.qaOIC.search-match')}

    async checkText () {
        await expect(this.searchLink).toHaveTextContaining('act')
    }
}
export default new RepositoriesPage ()
