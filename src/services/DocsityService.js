import AuthService from "./AuthService";

class GeneralService {
    searchNotFoundItem = "Ooops...La pagina che stai cercando non esiste!";

    authService = new AuthService();
    showError(body) {
        console.log(body)
        if (body.error) {
            window.alert(body.error)
        } else if (body.message) {
            window.alert(body.message)
        } else {
            window.alert("errorGeneralService")
        }
        throw Object.assign(
            new Error(body)
        );
    }

    async getPageImage(link, abortController) {
        if (!link) {
            return null
        }
        return this.authService.fetchHtml("https://v1.nocodeapi.com/drincs/screen/HhEJHmQOXbJCcfdu/screenshot?url=" + link, { signal: abortController.signal })
            .then(response => {
                return response;
            })
            .catch((res) => {
                this.showError(res)
            });
    }
}
export default GeneralService;
