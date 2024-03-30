const icons = [
  "10k",
  "10mp",
  "11mp",
  "123",
  "12mp",
  "13mp",
  "14mp",
  "15mp",
  "16mp",
  "17mp",
  "18-up-rating",
  "18mp",
  "19mp",
  "1k",
  "1k-plus",
  "1x-mobiledata",
  "20mp",
  "21mp",
  "22mp",
  "23mp",
  "24mp",
  "2k",
  "2k-plus",
  "2mp",
  "30fps",
  "30fps-select",
  "360",
  "3d-rotation",
  "3g-mobiledata",
  "3k",
  "3k-plus",
  "3mp",
  "3p",
  "4g-mobiledata",
  "4g-plus-mobiledata",
  "4k",
  "4k-plus",
  "4mp",
  "5g",
  "5k",
  "5k-plus",
  "5mp",
  "60fps",
  "60fps-select",
  "6-ft-apart",
  "6k",
  "6k-plus",
  "6mp",
  "7k",
  "7k-plus",
  "7mp",
  "8k",
  "8k-plus",
  "8mp",
  "9k",
  "9k-plus",
  "9mp",
  "abc",
  "ac-unit",
  "access-alarm",
  "access-alarms",
  "access-time",
  "access-time-filled",
  "accessibility",
  "accessibility-new",
  "accessible",
  "accessible-forward",
  "account-balance",
  "account-balance-wallet",
  "account-box",
  "account-circle",
  "account-tree",
  "ad-units",
  "adb",
  "add",
  "add-a-photo",
  "add-alarm",
  "add-alert",
  "add-box",
  "add-business",
  "add-call",
  "add-card",
  "add-chart",
  "add-circle",
  "add-circle-outline",
  "add-comment",
  "add-home",
  "add-home-work",
  "add-ic-call",
  "add-link",
  "add-location",
  "add-location-alt",
  "add-moderator",
  "add-photo-alternate",
  "add-reaction",
  "add-road",
  "add-shopping-cart",
  "add-task",
  "add-to-drive",
  "add-to-home-screen",
  "add-to-photos",
  "add-to-queue",
  "addchart",
  "adf-scanner",
  "adjust",
  "admin-panel-settings",
  "adobe",
  "ads-click",
  "agriculture",
  "air",
  "airline-seat-flat",
  "airline-seat-flat-angled",
  "airline-seat-individual-suite",
  "airline-seat-legroom-extra",
  "airline-seat-legroom-normal",
  "airline-seat-legroom-reduced",
  "airline-seat-recline-extra",
  "airline-seat-recline-normal",
  "airline-stops",
  "airlines",
  "airplane-ticket",
  "airplanemode-active",
  "airplanemode-inactive",
  "airplanemode-off",
  "airplanemode-on",
  "airplay",
  "airport-shuttle",
  "alarm",
  "alarm-add",
  "alarm-off",
  "alarm-on",
  "album",
  "align-horizontal-center",
  "align-horizontal-left",
  "align-horizontal-right",
  "align-vertical-bottom",
  "align-vertical-center",
  "align-vertical-top",
  "all-inbox",
  "all-inclusive",
  "all-out",
  "alt-route",
  "alternate-email",
  "amp-stories",
  "analytics",
  "anchor",
  "android",
  "animation",
  "announcement",
  "aod",
  "apartment",
  "api",
  "app-blocking",
  "app-registration",
  "app-settings-alt",
  "app-shortcut",
  "apple",
  "approval",
  "apps",
  "apps-outage",
  "architecture",
  "archive",
  "area-chart",
  "arrow-back",
  "arrow-back-ios",
  "arrow-back-ios-new",
  "arrow-circle-down",
  "arrow-circle-left",
  "arrow-circle-right",
  "arrow-circle-up",
  "arrow-downward",
  "arrow-drop-down",
  "arrow-drop-down-circle",
  "arrow-drop-up",
  "arrow-forward",
  "arrow-forward-ios",
  "arrow-left",
  "arrow-outward",
  "arrow-right",
  "arrow-right-alt",
  "arrow-upward",
  "art-track",
  "article",
  "aspect-ratio",
  "assessment",
  "assignment",
  "assignment-add",
  "assignment-ind",
  "assignment-late",
  "assignment-return",
  "assignment-returned",
  "assignment-turned-in",
  "assist-walker",
  "assistant",
  "assistant-direction",
  "assistant-navigation",
  "assistant-photo",
  "assured-workload",
  "atm",
  "attach-email",
  "attach-file",
  "attach-money",
  "attachment",
  "attractions",
  "attribution",
  "audio-file",
  "audiotrack",
  "auto-awesome",
  "auto-awesome-mosaic",
  "auto-awesome-motion",
  "auto-delete",
  "auto-fix-high",
  "auto-fix-normal",
  "auto-fix-off",
  "auto-graph",
  "auto-mode",
  "auto-stories",
  "autofps-select",
  "autorenew",
  "av-timer",
  "baby-changing-station",
  "back-hand",
  "backpack",
  "backspace",
  "backup",
  "backup-table",
  "badge",
  "bakery-dining",
  "balance",
  "balcony",
  "ballot",
  "bar-chart",
  "barcode-reader",
  "batch-prediction",
  "bathroom",
  "bathtub",
  "battery-0-bar",
  "battery-1-bar",
  "battery-2-bar",
  "battery-3-bar",
  "battery-4-bar",
  "battery-5-bar",
  "battery-6-bar",
  "battery-alert",
  "battery-charging-full",
  "battery-full",
  "battery-saver",
  "battery-std",
  "battery-unknown",
  "beach-access",
  "bed",
  "bedroom-baby",
  "bedroom-child",
  "bedroom-parent",
  "bedtime",
  "bedtime-off",
  "beenhere",
  "bento",
  "bike-scooter",
  "biotech",
  "blender",
  "blind",
  "blinds",
  "blinds-closed",
  "block",
  "block-flipped",
  "bloodtype",
  "bluetooth",
  "bluetooth-audio",
  "bluetooth-connected",
  "bluetooth-disabled",
  "bluetooth-drive",
  "bluetooth-searching",
  "blur-circular",
  "blur-linear",
  "blur-off",
  "blur-on",
  "bolt",
  "book",
  "book-online",
  "bookmark",
  "bookmark-add",
  "bookmark-added",
  "bookmark-border",
  "bookmark-outline",
  "bookmark-remove",
  "bookmarks",
  "border-all",
  "border-bottom",
  "border-clear",
  "border-color",
  "border-horizontal",
  "border-inner",
  "border-left",
  "border-outer",
  "border-right",
  "border-style",
  "border-top",
  "border-vertical",
  "boy",
  "branding-watermark",
  "breakfast-dining",
  "brightness-1",
  "brightness-2",
  "brightness-3",
  "brightness-4",
  "brightness-5",
  "brightness-6",
  "brightness-7",
  "brightness-auto",
  "brightness-high",
  "brightness-low",
  "brightness-medium",
  "broadcast-on-home",
  "broadcast-on-personal",
  "broken-image",
  "browse-gallery",
  "browser-not-supported",
  "browser-updated",
  "brunch-dining",
  "brush",
  "bubble-chart",
  "bug-report",
  "build",
  "build-circle",
  "bungalow",
  "burst-mode",
  "bus-alert",
  "business",
  "business-center",
  "cabin",
  "cable",
  "cached",
  "cake",
  "calculate",
  "calendar-month",
  "calendar-today",
  "calendar-view-day",
  "calendar-view-month",
  "calendar-view-week",
  "call",
  "call-end",
  "call-made",
  "call-merge",
  "call-missed",
  "call-missed-outgoing",
  "call-received",
  "call-split",
  "call-to-action",
  "camera",
  "camera-alt",
  "camera-enhance",
  "camera-front",
  "camera-indoor",
  "camera-outdoor",
  "camera-rear",
  "camera-roll",
  "cameraswitch",
  "campaign",
  "cancel",
  "cancel-presentation",
  "cancel-schedule-send",
  "candlestick-chart",
  "car-crash",
  "car-rental",
  "car-repair",
  "card-giftcard",
  "card-membership",
  "card-travel",
  "carpenter",
  "cases",
  "casino",
  "cast",
  "cast-connected",
  "cast-for-education",
  "castle",
  "catching-pokemon",
  "category",
  "celebration",
  "cell-tower",
  "cell-wifi",
  "center-focus-strong",
  "center-focus-weak",
  "chair",
  "chair-alt",
  "chalet",
  "change-circle",
  "change-history",
  "charging-station",
  "chat",
  "chat-bubble",
  "chat-bubble-outline",
  "check",
  "check-box",
  "check-box-outline-blank",
  "check-circle",
  "check-circle-outline",
  "checklist",
  "checklist-rtl",
  "checkroom",
  "chevron-left",
  "chevron-right",
  "child-care",
  "child-friendly",
  "chrome-reader-mode",
  "church",
  "circle",
  "circle-notifications",
  "class",
  "clean-hands",
  "cleaning-services",
  "clear",
  "clear-all",
  "close",
  "close-fullscreen",
  "closed-caption",
  "closed-caption-disabled",
  "closed-caption-off",
  "cloud",
  "cloud-circle",
  "cloud-done",
  "cloud-download",
  "cloud-off",
  "cloud-queue",
  "cloud-sync",
  "cloud-upload",
  "cloudy-snowing",
  "co2",
  "co-present",
  "code",
  "code-off",
  "coffee",
  "coffee-maker",
  "collections",
  "collections-bookmark",
  "color-lens",
  "colorize",
  "comment",
  "comment-bank",
  "comments-disabled",
  "commit",
  "commute",
  "compare",
  "compare-arrows",
  "compass-calibration",
  "compost",
  "compress",
  "computer",
  "confirmation-num",
  "confirmation-number",
  "connect-without-contact",
  "connected-tv",
  "connecting-airports",
  "construction",
  "contact-emergency",
  "contact-mail",
  "contact-page",
  "contact-phone",
  "contact-support",
  "contactless",
  "contacts",
  "content-copy",
  "content-cut",
  "content-paste",
  "content-paste-go",
  "content-paste-off",
  "content-paste-search",
  "contrast",
  "control-camera",
  "control-point",
  "control-point-duplicate",
  "conveyor-belt",
  "cookie",
  "copy-all",
  "copyright",
  "coronavirus",
  "corporate-fare",
  "cottage",
  "countertops",
  "create",
  "create-new-folder",
  "credit-card",
  "credit-card-off",
  "credit-score",
  "crib",
  "crisis-alert",
  "crop",
  "crop-16-9",
  "crop-3-2",
  "crop-5-4",
  "crop-7-5",
  "crop-din",
  "crop-free",
  "crop-landscape",
  "crop-original",
  "crop-portrait",
  "crop-rotate",
  "crop-square",
  "cruelty-free",
  "css",
  "currency-bitcoin",
  "currency-exchange",
  "currency-franc",
  "currency-lira",
  "currency-pound",
  "currency-ruble",
  "currency-rupee",
  "currency-yen",
  "currency-yuan",
  "curtains",
  "curtains-closed",
  "cyclone",
  "dangerous",
  "dark-mode",
  "dashboard",
  "dashboard-customize",
  "data-array",
  "data-exploration",
  "data-object",
  "data-saver-off",
  "data-saver-on",
  "data-thresholding",
  "data-usage",
  "dataset",
  "dataset-linked",
  "date-range",
  "deblur",
  "deck",
  "dehaze",
  "delete",
  "delete-forever",
  "delete-outline",
  "delete-sweep",
  "delivery-dining",
  "density-large",
  "density-medium",
  "density-small",
  "departure-board",
  "description",
  "deselect",
  "design-services",
  "desk",
  "desktop-access-disabled",
  "desktop-mac",
  "desktop-windows",
  "details",
  "developer-board",
  "developer-board-off",
  "developer-mode",
  "device-hub",
  "device-thermostat",
  "device-unknown",
  "devices",
  "devices-fold",
  "devices-other",
  "dew-point",
  "dialer-sip",
  "dialpad",
  "diamond",
  "difference",
  "dining",
  "dinner-dining",
  "directions",
  "directions-bike",
  "directions-boat",
  "directions-boat-filled",
  "directions-bus",
  "directions-bus-filled",
  "directions-car",
  "directions-car-filled",
  "directions-ferry",
  "directions-off",
  "directions-railway",
  "directions-railway-filled",
  "directions-run",
  "directions-subway",
  "directions-subway-filled",
  "directions-train",
  "directions-transit",
  "directions-transit-filled",
  "directions-walk",
  "dirty-lens",
  "disabled-by-default",
  "disabled-visible",
  "disc-full",
  "discord",
  "discount",
  "display-settings",
  "diversity-1",
  "diversity-2",
  "diversity-3",
  "dnd-forwardslash",
  "dns",
  "do-disturb",
  "do-disturb-alt",
  "do-disturb-off",
  "do-disturb-on",
  "do-not-disturb",
  "do-not-disturb-alt",
  "do-not-disturb-off",
  "do-not-disturb-on",
  "do-not-disturb-on-total-silence",
  "do-not-step",
  "do-not-touch",
  "dock",
  "document-scanner",
  "domain",
  "domain-add",
  "domain-disabled",
  "domain-verification",
  "done",
  "done-all",
  "done-outline",
  "donut-large",
  "donut-small",
  "door-back",
  "door-front",
  "door-sliding",
  "doorbell",
  "double-arrow",
  "downhill-skiing",
  "download",
  "download-done",
  "download-for-offline",
  "downloading",
  "drafts",
  "drag-handle",
  "drag-indicator",
  "draw",
  "drive-eta",
  "drive-file-move",
  "drive-file-move-outline",
  "drive-file-move-rtl",
  "drive-file-rename-outline",
  "drive-folder-upload",
  "dry",
  "dry-cleaning",
  "duo",
  "dvr",
  "dynamic-feed",
  "dynamic-form",
  "e-mobiledata",
  "earbuds",
  "earbuds-battery",
  "east",
  "eco",
  "edgesensor-high",
  "edgesensor-low",
  "edit",
  "edit-attributes",
  "edit-calendar",
  "edit-document",
  "edit-location",
  "edit-location-alt",
  "edit-note",
  "edit-notifications",
  "edit-off",
  "edit-road",
  "edit-square",
  "egg",
  "egg-alt",
  "eject",
  "elderly",
  "elderly-woman",
  "electric-bike",
  "electric-bolt",
  "electric-car",
  "electric-meter",
  "electric-moped",
  "electric-rickshaw",
  "electric-scooter",
  "electrical-services",
  "elevator",
  "email",
  "emergency",
  "emergency-recording",
  "emergency-share",
  "emoji-emotions",
  "emoji-events",
  "emoji-flags",
  "emoji-food-beverage",
  "emoji-nature",
  "emoji-objects",
  "emoji-people",
  "emoji-symbols",
  "emoji-transportation",
  "energy-savings-leaf",
  "engineering",
  "enhance-photo-translate",
  "enhanced-encryption",
  "equalizer",
  "error",
  "error-outline",
  "escalator",
  "escalator-warning",
  "euro",
  "euro-symbol",
  "ev-station",
  "event",
  "event-available",
  "event-busy",
  "event-note",
  "event-repeat",
  "event-seat",
  "exit-to-app",
  "expand",
  "expand-circle-down",
  "expand-less",
  "expand-more",
  "explicit",
  "explore",
  "explore-off",
  "exposure",
  "exposure-minus-1",
  "exposure-minus-2",
  "exposure-neg-1",
  "exposure-neg-2",
  "exposure-plus-1",
  "exposure-plus-2",
  "exposure-zero",
  "extension",
  "extension-off",
  "face",
  "face-2",
  "face-3",
  "face-4",
  "face-5",
  "face-6",
  "face-retouching-natural",
  "face-retouching-off",
  "facebook",
  "fact-check",
  "factory",
  "family-restroom",
  "fast-forward",
  "fast-rewind",
  "fastfood",
  "favorite",
  "favorite-border",
  "favorite-outline",
  "fax",
  "featured-play-list",
  "featured-video",
  "feed",
  "feedback",
  "female",
  "fence",
  "festival",
  "fiber-dvr",
  "fiber-manual-record",
  "fiber-new",
  "fiber-pin",
  "fiber-smart-record",
  "file-copy",
  "file-download",
  "file-download-done",
  "file-download-off",
  "file-open",
  "file-present",
  "file-upload",
  "file-upload-off",
  "filter",
  "filter-1",
  "filter-2",
  "filter-3",
  "filter-4",
  "filter-5",
  "filter-6",
  "filter-7",
  "filter-8",
  "filter-9",
  "filter-9-plus",
  "filter-alt",
  "filter-alt-off",
  "filter-b-and-w",
  "filter-center-focus",
  "filter-drama",
  "filter-frames",
  "filter-hdr",
  "filter-list",
  "filter-list-alt",
  "filter-list-off",
  "filter-none",
  "filter-tilt-shift",
  "filter-vintage",
  "find-in-page",
  "find-replace",
  "fingerprint",
  "fire-extinguisher",
  "fire-hydrant",
  "fire-hydrant-alt",
  "fire-truck",
  "fireplace",
  "first-page",
  "fit-screen",
  "fitbit",
  "fitness-center",
  "flag",
  "flag-circle",
  "flaky",
  "flare",
  "flash-auto",
  "flash-off",
  "flash-on",
  "flashlight-off",
  "flashlight-on",
  "flatware",
  "flight",
  "flight-class",
  "flight-land",
  "flight-takeoff",
  "flip",
  "flip-camera-android",
  "flip-camera-ios",
  "flip-to-back",
  "flip-to-front",
  "flood",
  "flourescent",
  "flutter-dash",
  "fmd-bad",
  "fmd-good",
  "foggy",
  "folder",
  "folder-copy",
  "folder-delete",
  "folder-off",
  "folder-open",
  "folder-shared",
  "folder-special",
  "folder-zip",
  "follow-the-signs",
  "font-download",
  "font-download-off",
  "food-bank",
  "forest",
  "fork-left",
  "fork-right",
  "forklift",
  "format-align-center",
  "format-align-justify",
  "format-align-left",
  "format-align-right",
  "format-bold",
  "format-clear",
  "format-color-fill",
  "format-color-reset",
  "format-color-text",
  "format-indent-decrease",
  "format-indent-increase",
  "format-italic",
  "format-line-spacing",
  "format-list-bulleted",
  "format-list-bulleted-add",
  "format-list-numbered",
  "format-list-numbered-rtl",
  "format-overline",
  "format-paint",
  "format-quote",
  "format-shapes",
  "format-size",
  "format-strikethrough",
  "format-textdirection-l-to-r",
  "format-textdirection-r-to-l",
  "format-underline",
  "format-underlined",
  "fort",
  "forum",
  "forward",
  "forward-10",
  "forward-30",
  "forward-5",
  "forward-to-inbox",
  "foundation",
  "free-breakfast",
  "free-cancellation",
  "front-hand",
  "front-loader",
  "fullscreen",
  "fullscreen-exit",
  "functions",
  "g-mobiledata",
  "g-translate",
  "gamepad",
  "games",
  "garage",
  "gas-meter",
  "gavel",
  "generating-tokens",
  "gesture",
  "get-app",
  "gif",
  "gif-box",
  "girl",
  "gite",
  "goat",
  "golf-course",
  "gpp-bad",
  "gpp-good",
  "gpp-maybe",
  "gps-fixed",
  "gps-not-fixed",
  "gps-off",
  "grade",
  "gradient",
  "grading",
  "grain",
  "graphic-eq",
  "grass",
  "grid-3x3",
  "grid-4x4",
  "grid-goldenratio",
  "grid-off",
  "grid-on",
  "grid-view",
  "group",
  "group-add",
  "group-off",
  "group-remove",
  "group-work",
  "groups",
  "groups-2",
  "groups-3",
  "h-mobiledata",
  "h-plus-mobiledata",
  "hail",
  "handshake",
  "handyman",
  "hardware",
  "hd",
  "hdr-auto",
  "hdr-auto-select",
  "hdr-enhanced-select",
  "hdr-off",
  "hdr-off-select",
  "hdr-on",
  "hdr-on-select",
  "hdr-plus",
  "hdr-strong",
  "hdr-weak",
  "headphones",
  "headphones-battery",
  "headset",
  "headset-mic",
  "headset-off",
  "healing",
  "health-and-safety",
  "hearing",
  "hearing-disabled",
  "heart-broken",
  "heat-pump",
  "height",
  "help",
  "help-center",
  "help-outline",
  "hevc",
  "hexagon",
  "hide-image",
  "hide-source",
  "high-quality",
  "highlight",
  "highlight-alt",
  "highlight-off",
  "highlight-remove",
  "hiking",
  "history",
  "history-edu",
  "history-toggle-off",
  "hive",
  "hls",
  "hls-off",
  "holiday-village",
  "home",
  "home-filled",
  "home-max",
  "home-mini",
  "home-repair-service",
  "home-work",
  "horizontal-distribute",
  "horizontal-rule",
  "horizontal-split",
  "hot-tub",
  "hotel",
  "hotel-class",
  "hourglass-bottom",
  "hourglass-disabled",
  "hourglass-empty",
  "hourglass-full",
  "hourglass-top",
  "house",
  "house-siding",
  "houseboat",
  "how-to-reg",
  "how-to-vote",
  "html",
  "http",
  "https",
  "hub",
  "hvac",
  "ice-skating",
  "icecream",
  "image",
  "image-aspect-ratio",
  "image-not-supported",
  "image-search",
  "imagesearch-roller",
  "import-contacts",
  "import-export",
  "important-devices",
  "inbox",
  "incomplete-circle",
  "indeterminate-check-box",
  "info",
  "info-outline",
  "input",
  "insert-chart",
  "insert-chart-outlined",
  "insert-comment",
  "insert-drive-file",
  "insert-emoticon",
  "insert-invitation",
  "insert-link",
  "insert-page-break",
  "insert-photo",
  "insights",
  "install-desktop",
  "install-mobile",
  "integration-instructions",
  "interests",
  "interpreter-mode",
  "inventory",
  "inventory-2",
  "invert-colors",
  "invert-colors-off",
  "invert-colors-on",
  "ios-share",
  "iron",
  "iso",
  "javascript",
  "join-full",
  "join-inner",
  "join-left",
  "join-right",
  "kayaking",
  "kebab-dining",
  "key",
  "key-off",
  "keyboard",
  "keyboard-alt",
  "keyboard-arrow-down",
  "keyboard-arrow-left",
  "keyboard-arrow-right",
  "keyboard-arrow-up",
  "keyboard-backspace",
  "keyboard-capslock",
  "keyboard-command",
  "keyboard-command-key",
  "keyboard-control",
  "keyboard-control-key",
  "keyboard-double-arrow-down",
  "keyboard-double-arrow-left",
  "keyboard-double-arrow-right",
  "keyboard-double-arrow-up",
  "keyboard-hide",
  "keyboard-option",
  "keyboard-option-key",
  "keyboard-return",
  "keyboard-tab",
  "keyboard-voice",
  "king-bed",
  "kitchen",
  "kitesurfing",
  "label",
  "label-important",
  "label-important-outline",
  "label-off",
  "label-outline",
  "lan",
  "landscape",
  "landslide",
  "language",
  "laptop",
  "laptop-chromebook",
  "laptop-mac",
  "laptop-windows",
  "last-page",
  "launch",
  "layers",
  "layers-clear",
  "leaderboard",
  "leak-add",
  "leak-remove",
  "leave-bags-at-home",
  "legend-toggle",
  "lens",
  "lens-blur",
  "library-add",
  "library-add-check",
  "library-books",
  "library-music",
  "light",
  "light-mode",
  "lightbulb",
  "lightbulb-circle",
  "lightbulb-outline",
  "line-axis",
  "line-style",
  "line-weight",
  "linear-scale",
  "link",
  "link-off",
  "linked-camera",
  "liquor",
  "list",
  "list-alt",
  "live-help",
  "live-tv",
  "living",
  "local-activity",
  "local-airport",
  "local-atm",
  "local-attraction",
  "local-bar",
  "local-cafe",
  "local-car-wash",
  "local-convenience-store",
  "local-dining",
  "local-drink",
  "local-fire-department",
  "local-florist",
  "local-gas-station",
  "local-grocery-store",
  "local-hospital",
  "local-hotel",
  "local-laundry-service",
  "local-library",
  "local-mall",
  "local-movies",
  "local-offer",
  "local-parking",
  "local-pharmacy",
  "local-phone",
  "local-pizza",
  "local-play",
  "local-police",
  "local-post-office",
  "local-print-shop",
  "local-printshop",
  "local-restaurant",
  "local-see",
  "local-shipping",
  "local-taxi",
  "location-city",
  "location-disabled",
  "location-history",
  "location-off",
  "location-on",
  "location-pin",
  "location-searching",
  "lock",
  "lock-clock",
  "lock-open",
  "lock-outline",
  "lock-person",
  "lock-reset",
  "login",
  "logo-dev",
  "logout",
  "looks",
  "looks-3",
  "looks-4",
  "looks-5",
  "looks-6",
  "looks-one",
  "looks-two",
  "loop",
  "loupe",
  "low-priority",
  "loyalty",
  "lte-mobiledata",
  "lte-plus-mobiledata",
  "luggage",
  "lunch-dining",
  "lyrics",
  "macro-off",
  "mail",
  "mail-lock",
  "mail-outline",
  "male",
  "man",
  "man-2",
  "man-3",
  "man-4",
  "manage-accounts",
  "manage-history",
  "manage-search",
  "map",
  "maps-home-work",
  "maps-ugc",
  "margin",
  "mark-as-unread",
  "mark-chat-read",
  "mark-chat-unread",
  "mark-email-read",
  "mark-email-unread",
  "mark-unread-chat-alt",
  "markunread",
  "markunread-mailbox",
  "masks",
  "maximize",
  "media-bluetooth-off",
  "media-bluetooth-on",
  "mediation",
  "medical-information",
  "medical-services",
  "medication",
  "medication-liquid",
  "meeting-room",
  "memory",
  "menu",
  "menu-book",
  "menu-open",
  "merge",
  "merge-type",
  "message",
  "messenger",
  "messenger-outline",
  "mic",
  "mic-external-off",
  "mic-external-on",
  "mic-none",
  "mic-off",
  "microwave",
  "military-tech",
  "minimize",
  "minor-crash",
  "miscellaneous-services",
  "missed-video-call",
  "mms",
  "mobile-friendly",
  "mobile-off",
  "mobile-screen-share",
  "mobiledata-off",
  "mode",
  "mode-comment",
  "mode-edit",
  "mode-edit-outline",
  "mode-fan-off",
  "mode-night",
  "mode-of-travel",
  "mode-standby",
  "model-training",
  "monetization-on",
  "money",
  "money-off",
  "money-off-csred",
  "monitor",
  "monitor-heart",
  "monitor-weight",
  "monochrome-photos",
  "mood",
  "mood-bad",
  "moped",
  "more",
  "more-horiz",
  "more-time",
  "more-vert",
  "mosque",
  "motion-photos-auto",
  "motion-photos-off",
  "motion-photos-on",
  "motion-photos-pause",
  "motion-photos-paused",
  "motorcycle",
  "mouse",
  "move-down",
  "move-to-inbox",
  "move-up",
  "movie",
  "movie-creation",
  "movie-edit",
  "movie-filter",
  "moving",
  "mp",
  "multiline-chart",
  "multiple-stop",
  "multitrack-audio",
  "museum",
  "music-note",
  "music-off",
  "music-video",
  "my-library-add",
  "my-library-books",
  "my-library-music",
  "my-location",
  "nat",
  "nature",
  "nature-people",
  "navigate-before",
  "navigate-next",
  "navigation",
  "near-me",
  "near-me-disabled",
  "nearby-error",
  "nearby-off",
  "nest-cam-wired-stand",
  "network-cell",
  "network-check",
  "network-locked",
  "network-ping",
  "network-wifi",
  "network-wifi-1-bar",
  "network-wifi-2-bar",
  "network-wifi-3-bar",
  "new-label",
  "new-releases",
  "newspaper",
  "next-plan",
  "next-week",
  "nfc",
  "night-shelter",
  "nightlife",
  "nightlight",
  "nightlight-round",
  "nights-stay",
  "no-accounts",
  "no-adult-content",
  "no-backpack",
  "no-cell",
  "no-crash",
  "no-drinks",
  "no-encryption",
  "no-encryption-gmailerrorred",
  "no-flash",
  "no-food",
  "no-luggage",
  "no-meals",
  "no-meals-ouline",
  "no-meeting-room",
  "no-photography",
  "no-sim",
  "no-stroller",
  "no-transfer",
  "noise-aware",
  "noise-control-off",
  "nordic-walking",
  "north",
  "north-east",
  "north-west",
  "not-accessible",
  "not-interested",
  "not-listed-location",
  "not-started",
  "note",
  "note-add",
  "note-alt",
  "notes",
  "notification-add",
  "notification-important",
  "notifications",
  "notifications-active",
  "notifications-none",
  "notifications-off",
  "notifications-on",
  "notifications-paused",
  "now-wallpaper",
  "now-widgets",
  "numbers",
  "offline-bolt",
  "offline-pin",
  "offline-share",
  "oil-barrel",
  "on-device-training",
  "ondemand-video",
  "online-prediction",
  "opacity",
  "open-in-browser",
  "open-in-full",
  "open-in-new",
  "open-in-new-off",
  "open-with",
  "other-houses",
  "outbond",
  "outbound",
  "outbox",
  "outdoor-grill",
  "outgoing-mail",
  "outlet",
  "outlined-flag",
  "output",
  "padding",
  "pages",
  "pageview",
  "paid",
  "palette",
  "pallet",
  "pan-tool",
  "pan-tool-alt",
  "panorama",
  "panorama-fish-eye",
  "panorama-fisheye",
  "panorama-horizontal",
  "panorama-horizontal-select",
  "panorama-photosphere",
  "panorama-photosphere-select",
  "panorama-vertical",
  "panorama-vertical-select",
  "panorama-wide-angle",
  "panorama-wide-angle-select",
  "paragliding",
  "park",
  "party-mode",
  "password",
  "pattern",
  "pause",
  "pause-circle",
  "pause-circle-filled",
  "pause-circle-outline",
  "pause-presentation",
  "payment",
  "payments",
  "paypal",
  "pedal-bike",
  "pending",
  "pending-actions",
  "pentagon",
  "people",
  "people-alt",
  "people-outline",
  "percent",
  "perm-camera-mic",
  "perm-contact-cal",
  "perm-contact-calendar",
  "perm-data-setting",
  "perm-device-info",
  "perm-device-information",
  "perm-identity",
  "perm-media",
  "perm-phone-msg",
  "perm-scan-wifi",
  "person",
  "person-2",
  "person-3",
  "person-4",
  "person-add",
  "person-add-alt",
  "person-add-alt-1",
  "person-add-disabled",
  "person-off",
  "person-outline",
  "person-pin",
  "person-pin-circle",
  "person-remove",
  "person-remove-alt-1",
  "person-search",
  "personal-injury",
  "personal-video",
  "pest-control",
  "pest-control-rodent",
  "pets",
  "phishing",
  "phone",
  "phone-android",
  "phone-bluetooth-speaker",
  "phone-callback",
  "phone-disabled",
  "phone-enabled",
  "phone-forwarded",
  "phone-in-talk",
  "phone-iphone",
  "phone-locked",
  "phone-missed",
  "phone-paused",
  "phonelink",
  "phonelink-erase",
  "phonelink-lock",
  "phonelink-off",
  "phonelink-ring",
  "phonelink-setup",
  "photo",
  "photo-album",
  "photo-camera",
  "photo-camera-back",
  "photo-camera-front",
  "photo-filter",
  "photo-library",
  "photo-size-select-actual",
  "photo-size-select-large",
  "photo-size-select-small",
  "php",
  "piano",
  "piano-off",
  "picture-as-pdf",
  "picture-in-picture",
  "picture-in-picture-alt",
  "pie-chart",
  "pie-chart-outline",
  "pie-chart-outlined",
  "pin",
  "pin-drop",
  "pin-end",
  "pin-invoke",
  "pinch",
  "pivot-table-chart",
  "pix",
  "place",
  "plagiarism",
  "play-arrow",
  "play-circle",
  "play-circle-fill",
  "play-circle-filled",
  "play-circle-outline",
  "play-disabled",
  "play-for-work",
  "play-lesson",
  "playlist-add",
  "playlist-add-check",
  "playlist-add-check-circle",
  "playlist-add-circle",
  "playlist-play",
  "playlist-remove",
  "plumbing",
  "plus-one",
  "podcasts",
  "point-of-sale",
  "policy",
  "poll",
  "polyline",
  "polymer",
  "pool",
  "portable-wifi-off",
  "portrait",
  "post-add",
  "power",
  "power-input",
  "power-off",
  "power-settings-new",
  "precision-manufacturing",
  "pregnant-woman",
  "present-to-all",
  "preview",
  "price-change",
  "price-check",
  "print",
  "print-disabled",
  "priority-high",
  "privacy-tip",
  "private-connectivity",
  "production-quantity-limits",
  "propane",
  "propane-tank",
  "psychology",
  "psychology-alt",
  "public",
  "public-off",
  "publish",
  "published-with-changes",
  "punch-clock",
  "push-pin",
  "qr-code",
  "qr-code-2",
  "qr-code-scanner",
  "query-builder",
  "query-stats",
  "question-answer",
  "question-mark",
  "queue",
  "queue-music",
  "queue-play-next",
  "quick-contacts-dialer",
  "quick-contacts-mail",
  "quickreply",
  "quiz",
  "quora",
  "r-mobiledata",
  "radar",
  "radio",
  "radio-button-checked",
  "radio-button-off",
  "radio-button-on",
  "radio-button-unchecked",
  "railway-alert",
  "ramen-dining",
  "ramp-left",
  "ramp-right",
  "rate-review",
  "raw-off",
  "raw-on",
  "read-more",
  "real-estate-agent",
  "rebase-edit",
  "receipt",
  "receipt-long",
  "recent-actors",
  "recommend",
  "record-voice-over",
  "rectangle",
  "recycling",
  "reddit",
  "redeem",
  "redo",
  "reduce-capacity",
  "refresh",
  "remember-me",
  "remove",
  "remove-circle",
  "remove-circle-outline",
  "remove-done",
  "remove-from-queue",
  "remove-moderator",
  "remove-red-eye",
  "remove-road",
  "remove-shopping-cart",
  "reorder",
  "repartition",
  "repeat",
  "repeat-on",
  "repeat-one",
  "repeat-one-on",
  "replay",
  "replay-10",
  "replay-30",
  "replay-5",
  "replay-circle-filled",
  "reply",
  "reply-all",
  "report",
  "report-gmailerrorred",
  "report-off",
  "report-problem",
  "request-page",
  "request-quote",
  "reset-tv",
  "restart-alt",
  "restaurant",
  "restaurant-menu",
  "restore",
  "restore-from-trash",
  "restore-page",
  "reviews",
  "rice-bowl",
  "ring-volume",
  "rocket",
  "rocket-launch",
  "roller-shades",
  "roller-shades-closed",
  "roller-skating",
  "roofing",
  "room",
  "room-preferences",
  "room-service",
  "rotate-90-degrees-ccw",
  "rotate-90-degrees-cw",
  "rotate-left",
  "rotate-right",
  "roundabout-left",
  "roundabout-right",
  "rounded-corner",
  "route",
  "router",
  "rowing",
  "rss-feed",
  "rsvp",
  "rtt",
  "rule",
  "rule-folder",
  "run-circle",
  "running-with-errors",
  "rv-hookup",
  "safety-check",
  "safety-divider",
  "sailing",
  "sanitizer",
  "satellite",
  "satellite-alt",
  "save",
  "save-alt",
  "save-as",
  "saved-search",
  "savings",
  "scale",
  "scanner",
  "scatter-plot",
  "schedule",
  "schedule-send",
  "schema",
  "school",
  "science",
  "score",
  "scoreboard",
  "screen-lock-landscape",
  "screen-lock-portrait",
  "screen-lock-rotation",
  "screen-rotation",
  "screen-rotation-alt",
  "screen-search-desktop",
  "screen-share",
  "screenshot",
  "screenshot-monitor",
  "scuba-diving",
  "sd",
  "sd-card",
  "sd-card-alert",
  "sd-storage",
  "search",
  "search-off",
  "security",
  "security-update",
  "security-update-good",
  "security-update-warning",
  "segment",
  "select-all",
  "self-improvement",
  "sell",
  "send",
  "send-and-archive",
  "send-time-extension",
  "send-to-mobile",
  "sensor-door",
  "sensor-occupied",
  "sensor-window",
  "sensors",
  "sensors-off",
  "sentiment-dissatisfied",
  "sentiment-neutral",
  "sentiment-satisfied",
  "sentiment-satisfied-alt",
  "sentiment-very-dissatisfied",
  "sentiment-very-satisfied",
  "set-meal",
  "settings",
  "settings-accessibility",
  "settings-applications",
  "settings-backup-restore",
  "settings-bluetooth",
  "settings-brightness",
  "settings-cell",
  "settings-display",
  "settings-ethernet",
  "settings-input-antenna",
  "settings-input-component",
  "settings-input-composite",
  "settings-input-hdmi",
  "settings-input-svideo",
  "settings-overscan",
  "settings-phone",
  "settings-power",
  "settings-remote",
  "settings-suggest",
  "settings-system-daydream",
  "settings-voice",
  "severe-cold",
  "shape-line",
  "share",
  "share-arrival-time",
  "share-location",
  "shelves",
  "shield",
  "shield-moon",
  "shop",
  "shop-2",
  "shop-two",
  "shopify",
  "shopping-bag",
  "shopping-basket",
  "shopping-cart",
  "shopping-cart-checkout",
  "short-text",
  "shortcut",
  "show-chart",
  "shower",
  "shuffle",
  "shuffle-on",
  "shutter-speed",
  "sick",
  "sign-language",
  "signal-cellular-0-bar",
  "signal-cellular-4-bar",
  "signal-cellular-alt",
  "signal-cellular-alt-1-bar",
  "signal-cellular-alt-2-bar",
  "signal-cellular-connected-no-internet-0-bar",
  "signal-cellular-connected-no-internet-4-bar",
  "signal-cellular-no-sim",
  "signal-cellular-nodata",
  "signal-cellular-null",
  "signal-cellular-off",
  "signal-wifi-0-bar",
  "signal-wifi-4-bar",
  "signal-wifi-4-bar-lock",
  "signal-wifi-bad",
  "signal-wifi-connected-no-internet-4",
  "signal-wifi-off",
  "signal-wifi-statusbar-4-bar",
  "signal-wifi-statusbar-connected-no-internet-4",
  "signal-wifi-statusbar-null",
  "signpost",
  "sim-card",
  "sim-card-alert",
  "sim-card-download",
  "single-bed",
  "sip",
  "skateboarding",
  "skip-next",
  "skip-previous",
  "sledding",
  "slideshow",
  "slow-motion-video",
  "smart-button",
  "smart-display",
  "smart-screen",
  "smart-toy",
  "smartphone",
  "smoke-free",
  "smoking-rooms",
  "sms",
  "sms-failed",
  "snapchat",
  "snippet-folder",
  "snooze",
  "snowboarding",
  "snowing",
  "snowmobile",
  "snowshoeing",
  "soap",
  "social-distance",
  "solar-power",
  "sort",
  "sort-by-alpha",
  "sos",
  "soup-kitchen",
  "source",
  "south",
  "south-america",
  "south-east",
  "south-west",
  "spa",
  "space-bar",
  "space-dashboard",
  "spatial-audio",
  "spatial-audio-off",
  "spatial-tracking",
  "speaker",
  "speaker-group",
  "speaker-notes",
  "speaker-notes-off",
  "speaker-phone",
  "speed",
  "spellcheck",
  "splitscreen",
  "spoke",
  "sports",
  "sports-bar",
  "sports-baseball",
  "sports-basketball",
  "sports-cricket",
  "sports-esports",
  "sports-football",
  "sports-golf",
  "sports-gymnastics",
  "sports-handball",
  "sports-hockey",
  "sports-kabaddi",
  "sports-martial-arts",
  "sports-mma",
  "sports-motorsports",
  "sports-rugby",
  "sports-score",
  "sports-soccer",
  "sports-tennis",
  "sports-volleyball",
  "square",
  "square-foot",
  "ssid-chart",
  "stacked-bar-chart",
  "stacked-line-chart",
  "stadium",
  "stairs",
  "star",
  "star-border",
  "star-border-purple500",
  "star-half",
  "star-outline",
  "star-purple500",
  "star-rate",
  "stars",
  "start",
  "stay-current-landscape",
  "stay-current-portrait",
  "stay-primary-landscape",
  "stay-primary-portrait",
  "sticky-note-2",
  "stop",
  "stop-circle",
  "stop-screen-share",
  "storage",
  "store",
  "store-mall-directory",
  "storefront",
  "storm",
  "straight",
  "straighten",
  "stream",
  "streetview",
  "strikethrough-s",
  "stroller",
  "style",
  "subdirectory-arrow-left",
  "subdirectory-arrow-right",
  "subject",
  "subscript",
  "subscriptions",
  "subtitles",
  "subtitles-off",
  "subway",
  "summarize",
  "sunny",
  "sunny-snowing",
  "superscript",
  "supervised-user-circle",
  "supervisor-account",
  "support",
  "support-agent",
  "surfing",
  "surround-sound",
  "swap-calls",
  "swap-horiz",
  "swap-horizontal-circle",
  "swap-vert",
  "swap-vert-circle",
  "swap-vertical-circle",
  "swipe",
  "swipe-down",
  "swipe-down-alt",
  "swipe-left",
  "swipe-left-alt",
  "swipe-right",
  "swipe-right-alt",
  "swipe-up",
  "swipe-up-alt",
  "swipe-vertical",
  "switch-access-shortcut",
  "switch-access-shortcut-add",
  "switch-account",
  "switch-camera",
  "switch-left",
  "switch-right",
  "switch-video",
  "synagogue",
  "sync",
  "sync-alt",
  "sync-disabled",
  "sync-lock",
  "sync-problem",
  "system-security-update",
  "system-security-update-good",
  "system-security-update-warning",
  "system-update",
  "system-update-alt",
  "system-update-tv",
  "tab",
  "tab-unselected",
  "table-bar",
  "table-chart",
  "table-restaurant",
  "table-rows",
  "table-view",
  "tablet",
  "tablet-android",
  "tablet-mac",
  "tag",
  "tag-faces",
  "takeout-dining",
  "tap-and-play",
  "tapas",
  "task",
  "task-alt",
  "taxi-alert",
  "telegram",
  "temple-buddhist",
  "temple-hindu",
  "terminal",
  "terrain",
  "text-decrease",
  "text-fields",
  "text-format",
  "text-increase",
  "text-rotate-up",
  "text-rotate-vertical",
  "text-rotation-angledown",
  "text-rotation-angleup",
  "text-rotation-down",
  "text-rotation-none",
  "text-snippet",
  "textsms",
  "texture",
  "theater-comedy",
  "theaters",
  "thermostat",
  "thermostat-auto",
  "thumb-down",
  "thumb-down-alt",
  "thumb-down-off-alt",
  "thumb-up",
  "thumb-up-alt",
  "thumb-up-off-alt",
  "thumbs-up-down",
  "thunderstorm",
  "tiktok",
  "time-to-leave",
  "timelapse",
  "timeline",
  "timer",
  "timer-10",
  "timer-10-select",
  "timer-3",
  "timer-3-select",
  "timer-off",
  "tips-and-updates",
  "tire-repair",
  "title",
  "toc",
  "today",
  "toggle-off",
  "toggle-on",
  "token",
  "toll",
  "tonality",
  "topic",
  "tornado",
  "touch-app",
  "tour",
  "toys",
  "track-changes",
  "traffic",
  "train",
  "tram",
  "transcribe",
  "transfer-within-a-station",
  "transform",
  "transgender",
  "transit-enterexit",
  "translate",
  "travel-explore",
  "trending-down",
  "trending-flat",
  "trending-neutral",
  "trending-up",
  "trip-origin",
  "trolley",
  "troubleshoot",
  "try",
  "tsunami",
  "tty",
  "tune",
  "tungsten",
  "turn-left",
  "turn-right",
  "turn-sharp-left",
  "turn-sharp-right",
  "turn-slight-left",
  "turn-slight-right",
  "turned-in",
  "turned-in-not",
  "tv",
  "tv-off",
  "two-wheeler",
  "type-specimen",
  "u-turn-left",
  "u-turn-right",
  "umbrella",
  "unarchive",
  "undo",
  "unfold-less",
  "unfold-less-double",
  "unfold-more",
  "unfold-more-double",
  "unpublished",
  "unsubscribe",
  "upcoming",
  "update",
  "update-disabled",
  "upgrade",
  "upload",
  "upload-file",
  "usb",
  "usb-off",
  "vaccines",
  "vape-free",
  "vaping-rooms",
  "verified",
  "verified-user",
  "vertical-align-bottom",
  "vertical-align-center",
  "vertical-align-top",
  "vertical-distribute",
  "vertical-shades",
  "vertical-shades-closed",
  "vertical-split",
  "vibration",
  "video-call",
  "video-camera-back",
  "video-camera-front",
  "video-chat",
  "video-collection",
  "video-file",
  "video-label",
  "video-library",
  "video-settings",
  "video-stable",
  "videocam",
  "videocam-off",
  "videogame-asset",
  "videogame-asset-off",
  "view-agenda",
  "view-array",
  "view-carousel",
  "view-column",
  "view-comfortable",
  "view-comfy",
  "view-comfy-alt",
  "view-compact",
  "view-compact-alt",
  "view-cozy",
  "view-day",
  "view-headline",
  "view-in-ar",
  "view-kanban",
  "view-list",
  "view-module",
  "view-quilt",
  "view-sidebar",
  "view-stream",
  "view-timeline",
  "view-week",
  "vignette",
  "villa",
  "visibility",
  "visibility-off",
  "voice-chat",
  "voice-over-off",
  "voicemail",
  "volcano",
  "volume-down",
  "volume-down-alt",
  "volume-mute",
  "volume-off",
  "volume-up",
  "volunteer-activism",
  "vpn-key",
  "vpn-key-off",
  "vpn-lock",
  "vrpano",
  "wallet",
  "wallet-giftcard",
  "wallet-membership",
  "wallet-travel",
  "wallpaper",
  "warehouse",
  "warning",
  "warning-amber",
  "wash",
  "watch",
  "watch-later",
  "watch-off",
  "water",
  "water-damage",
  "water-drop",
  "waterfall-chart",
  "waves",
  "waving-hand",
  "wb-auto",
  "wb-cloudy",
  "wb-incandescent",
  "wb-iridescent",
  "wb-shade",
  "wb-sunny",
  "wb-twighlight",
  "wb-twilight",
  "wc",
  "web",
  "web-asset",
  "web-asset-off",
  "web-stories",
  "webhook",
  "wechat",
  "weekend",
  "west",
  "whatshot",
  "wheelchair-pickup",
  "where-to-vote",
  "widgets",
  "width-full",
  "width-normal",
  "width-wide",
  "wifi",
  "wifi-1-bar",
  "wifi-2-bar",
  "wifi-calling",
  "wifi-calling-3",
  "wifi-channel",
  "wifi-find",
  "wifi-lock",
  "wifi-off",
  "wifi-password",
  "wifi-protected-setup",
  "wifi-tethering",
  "wifi-tethering-error",
  "wifi-tethering-error-rounded",
  "wifi-tethering-off",
  "wind-power",
  "window",
  "wine-bar",
  "woman",
  "woman-2",
  "woo-commerce",
  "wordpress",
  "work",
  "work-history",
  "work-off",
  "work-outline",
  "workspace-premium",
  "workspaces",
  "workspaces-filled",
  "workspaces-outline",
  "wrap-text",
  "wrong-location",
  "wysiwyg",
  "yard",
  "youtube-searched-for",
  "zoom-in",
  "zoom-in-map",
  "zoom-out",
  "zoom-out-map",
];

export default icons;