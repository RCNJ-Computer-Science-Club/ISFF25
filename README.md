# ISFF25 - International Street Food Festival

![HTML5](https://img.shields.io/badge/html5-e34f26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-1572b6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-f7df1e?style=flat-square&logo=javascript&logoColor=black)
![Bootstrap 4.5.2](https://img.shields.io/badge/bootstrap-4.5.2-7952b3?style=flat-square&logo=bootstrap&logoColor=white)

A static event site for the 2025 International Street Food Festival at Ramapo College. It highlights the
agenda, check-in and token system, food booths, activities, hosts, sponsors, and an event flyer, with a
live countdown banner.

## At a glance
| Item | Details |
| --- | --- |
| Entry | `src/index.html` |
| Styles | `src/style.css` (imports `src/css/*`) |
| Scripts | `src/js/scripts.js` |
| Assets | `src/res/` |
| Run | `python3 -m http.server 8000` |

## Highlights
- Single-page layout with dedicated sections for agenda, booths, activities, and sponsors.
- Countdown banner configured for the event start time.
- Vendor assets bundled locally (Bootstrap, jQuery, Popper) for offline-friendly demos.
- Flyer preview with a full-size asset link.

## Quick Start
Open `src/index.html` directly in a browser, or serve it locally for the smoothest experience:

```sh
cd src
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Update content
- Event schedule, booths, activities, hosts, sponsors, and registration link live in `src/index.html`.
- Countdown date and messaging live in `src/js/scripts.js`.
- Logos and the event flyer live in `src/res/logo` and `src/res/img`.
- Site styling is organized under `src/css/` and pulled together by `src/style.css`.

## Screenshots
| Screenshot | Preview |
| --- | --- |
| 1 | ![Screenshot 1](screenshots/one.png) |
| 2 | ![Screenshot 2](screenshots/two.png) |
| 3 | ![Screenshot 3](screenshots/three.png) |
| 4 | ![Screenshot 4](screenshots/four.png) |
| 5 | ![Screenshot 5](screenshots/five.png) |

## Project layout
| Path | Description |
| --- | --- |
| `src/index.html` | Main page layout and content sections. |
| `src/style.css` | CSS entrypoint that imports the site stylesheets. |
| `src/css/` | Base, layout, components, utilities, responsive styles, and Bootstrap. |
| `src/js/scripts.js` | Includes loader and countdown timer logic. |
| `src/js/` | Vendor JavaScript (Bootstrap, jQuery, Popper). |
| `src/res/` | Logos, fonts, and image assets. |

## Tech
- HTML5
- CSS3
- JavaScript
- Bootstrap 4.5.2

## License
MIT. See `LICENSE`.
