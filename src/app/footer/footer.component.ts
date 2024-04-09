import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  contactDetails = {
    "phone": {
      "value": "+91 9503769438",
      "icon": "telephone",
    },
    "peronal-mail": {
      "value": "chaitanyashinge&#64;gmail.com",
      "icon": "envelope",
    },
    "institute-mail": {
      "value": "23m2116&#64;iitb.ac.in",
      "icon": "envelope",
    },
    "department-mail": {
      "value": "chaitanyashinge&#64;cse.iitb.ac.in",
      "icon": "envelope",
    },
    "location": {
      "value": "Rees, India",
      "icon": "geo-alt",
    },
  };

  developerDetails = {
    "github": {
      "link": "https://github.com/CHAITANYA-IN",
      "icon": "github"
    },
    "gitlab": {
      "link": "https://gitlab.com/CHAITANYA-IN",
      "icon": "git"
    },
    "google-developer": {
      "link": "https://g.dev/chaitanyashinge",
      "icon": "google"
    },
  }

  socialMediaDetails = {
    "linkedin": {
      "link": "https://linkedin.com/in/chaitanyashinge",
      "icon": "linkedin"
    },
    "youtube": {
      "link": "https://www.youtube.com/&#64;chaitanyashinge",
      "icon": "youtube"
    },
    "twitter": {
      "link": "https://twitter.com/ShingeChaitanya",
      "icon": "twitter"
    },
    "discord": {
      "link": "https://discord.com/users/chaitanyashinge",
      "icon": "discord"
    },
    "instagram": {
      "link": "https://www.instagram.com/chaitanyashinge/",
      "icon": "instagram"
    },
    "facebook": {
      "link": "https://www.facebook.com/chaitanya.shinge",
      "icon": "facebook"
    },
    "threads": {
      "link": "https://www.threads.net/&#64;chaitanyashinge",
      "icon": "at"
    },
    "telegram": {
      "link": "https://t.me/chaitanyashinge",
      "icon": "telegram"
    },
    "snapchat": {
      "link": "https://www.snapchat.com/add/chaitubshinge",
      "icon": "snapchat"
    },
  }
}
