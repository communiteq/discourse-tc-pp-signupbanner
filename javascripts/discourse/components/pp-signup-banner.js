import Component from "@glimmer/component";
import { inject as service } from "@ember/service";
import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import { defaultHomepage } from "discourse/lib/utilities";
import I18n from "I18n";
import Category from "discourse/models/category";

const FEATURED_CLASS = "pp-signup-banner";

export default class PpSignupBanner extends Component {
    @service currentUser;
    @service router;

    get mustShow() {
        var prefixes = ["discovery.", "topic.", "tag.", "tags."];
        if (prefixes.some(prefix => this.router.currentRouteName.startsWith(prefix))) {
            return !this.currentUser || settings.show_to_logged_in;
        }
        return false;
    }

    @action clickSignupButton() {
        window.location.href = settings.signup_button_destination;
    }
}