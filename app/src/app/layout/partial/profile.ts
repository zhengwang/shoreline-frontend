import { Component } from '@angular/core';
import { WebService } from '../../service/web.service';

@Component({
	selector: 'Profile',
	template: `
		<li class="nav-item dropdown no-arrow">
			<a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
					data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					<span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
					<img class="img-profile rounded-circle"
							src="img/undraw_profile.svg">
			</a>
			<div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
					aria-labelledby="userDropdown">
				<DropDownItem>
					<UserIcon cls="fa-sm fa-fw mr-2 text-gray-400"/>
					{{ 'profile'| i18next }}
				</DropDownItem>
				<DropDownItem>
					<CogsIcon cls="fa-sm fa-fw mr-2 text-gray-400"/>
					{{ 'settings'|i18next}}
				</DropDownItem>
				<DropDownItem>
					<ListIcon cls="fa-sm fa-fw mr-2 text-gray-400"/>
					{{ 'act_log'|i18next}}
				</DropDownItem>
				<DropDownDivider />
				<DropDownItem (onclick)="handleLogout($event)">
					<LogoutIcon cls="mr-2 text-gray-400"/>
					{{ 'logout' | i18next }}
				</DropDownItem>
			</div>
		</li>
  `,
	styles: `:host {display: contents;}`
})
export class Profile {
	constructor(private webSvc: WebService) { }

	handleLogout($event) {
		if ($event == true) {
			this.webSvc.logout();
		}
	}

}
