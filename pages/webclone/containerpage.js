@import url("https://fonts.googleapis.com/css?family=Mada:400,500,600,700&display=swap");
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot);
  /* For IE6-8 */
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url(https://example.com/MaterialIcons-Regular.woff2) format("woff2"),
    url(https://example.com/MaterialIcons-Regular.woff) format("woff"),
    url(https://example.com/MaterialIcons-Regular.ttf) format("truetype");
}
html {
  height: 100%;
}
body {
  background-color: #fff;
  color: #131523;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 0.875rem !important;
  height: 100%;
  line-height: 1.5;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
  margin-top: 0;
}
h1 {
  font-size: 32pt;
}
h2 {
  font-size: 32px;
}
h3 {
  font-size: 24px;
}
h4 {
  font-size: 20px;
}
h5 {
  font-size: 18px;
}
h6 {
  font-size: 16px;
}
a {
  text-decoration: none !important;
}
a:hover,
a:active,
a:focus {
  outline: none;
  text-decoration: none !important;
  color: #00d0f1;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-box-shadow: 0 0 0px 1000px white inset !important;
}

.form-control {
  border: 1px solid #ddd;
  box-shadow: none;
  font-size: 15px;
  height: 40px;
}
.form-control:focus {
  border-color: #00d0f1;
  box-shadow: none;
  outline: 0 none;
}
.form-control.form-control-sm {
  height: calc(1.5em + 0.5rem + 2px);
}

.form-control.form-control-lg {
  height: calc(1.5em + 1rem + 2px);
}
a {
  color: #0dd9f9;
}
input,
button,
a {
  transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  -ms-transition: all 0.4s ease;
  -webkit-transition: all 0.4s ease;
}
input,
input:focus,
button,
button:focus {
  outline: none;
}
input[type="file"] {
  height: auto;
  min-height: calc(1.5em + 0.75rem + 2px);
}
input[type="text"],
input[type="password"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
textarea.form-control {
  resize: vertical;
}
.navbar-nav > li {
  float: left;
}
.form-group {
  margin-bottom: 1.25rem;
  font-size: small;
}
.dropdown-input {
  width: 21.6rem;
  height: 3.7rem;

  margin-bottom: 1rem;
}
.input-group .form-control {
  height: 40px;
}
.nav .open > a,
.nav .open > a:focus,
.nav .open > a:hover {
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(0, 0, 0, 0.1);
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: "liga";
}
.font-weight-600 {
  font-weight: 600;
}

/*-----------------
	2. Table
-----------------------*/

[data-theme="dark"] {
  --background: #000;
  --text-primary: #fff;
  --text-secondary: #8e05c2;
  --accent: #8e05c2;
  --border: #808080;
  --form-bg: #191919;
}
/* -----------------dark */

.table {
  color: #131523;
  max-width: 100%;
  margin-bottom: 0;
  width: 100%;
}
.table-striped > tbody > tr:nth-of-type(2n + 1) {
  background-color: #f8f9fa;
}
.table.no-border > tbody > tr > td,
.table > tbody > tr > th,
.table.no-border > tfoot > tr > td,
.table.no-border > tfoot > tr > th,
.table.no-border > thead > tr > td,
.table.no-border > thead > tr > th {
  padding: 10px 8px;
}
.table-nowrap td,
.table-nowrap th {
  white-space: nowrap;
}
.table.dataTable {
  border-collapse: collapse !important;
}
h2 {
  display: inline-block;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
}
h2.table-avatar {
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: nowrap;
}
.table > tbody > tr > td {
  padding: 15px;
}
h2 a {
  color: #131523;
}
h2 a:hover {
  color: #0ce0ff;
}
h2 span {
  display: block;
  margin-top: 3px;
}
h2.table-avatar a > img {
  border-radius: 6px;
  margin-right: 12px;
}
.table thead {
  background-color: transparent;
  border-bottom: 0;
}
.table thead tr th {
  font-weight: 500;
}
.table.table-center td,
.table.table-center th {
  vertical-align: middle;
}
.table-hover tbody tr:hover {
  background-color: #fff;
}
.table td,
.table th {
  vertical-align: middle;
  white-space: nowrap;
}
.table-bordered {
  border: 1px solid rgba(0, 0, 0, 0.05) !important;
}
.table-bordered td:first-child {
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
.table-bordered td:last-child {
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.table-bordered th,
.table-bordered td {
  border-color: rgba(0, 0, 0, 0.05);
}
.tab-subtext {
  font-size: 14px;
}
.dataTables_wrapper .pagination li + li {
  padding-left: 5px;
}
.dataTables_wrapper .page-item.active .page-link {
  background: #f4f6ff;
  border: 1px solid #e6e9f4;
  color: #1b5a90;
}
.dataTables_wrapper .previous .page-link,
.dataTables_wrapper .next .page-link {
  width: auto;
  height: auto;
  box-shadow: none;
  color: #1b5a90;
  font-size: 14px;
  border: 0;
}
.dataTables_wrapper .page-link {
  border: none;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  box-shadow: 0px 4px 7px rgb(185 185 185 / 25%);
  width: 32px;
  height: 32px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
#tablepagination .dataTables_paginate {
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
}
.table.dataTable {
  margin: 0 !important;
}
.card-header .form-custom label {
  position: relative;
}
.card-header .form-custom label::before {
  position: absolute;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f002";
  left: 15px;
  top: 7px;
  color: #7e84a3;
}
.card-table .card-body {
  padding: 0;
}
.card-table .card-body .table > thead > tr > th {
  border-top: 0;
}
.card-table .card-body .table tr td:first-child,
.card-table .card-body .table tr th:first-child {
  padding-left: 1.5rem;
}
.card-table .card-body .table tr td:last-child,
.card-table .card-body .table tr th:last-child {
  padding-right: 1.5rem;
}
.card-table .table td,
.card-table .table th {
  border-top: 1px solid #e2e5e8;
  padding: 1rem 0.75rem;
  white-space: nowrap;
}
.toggle-password {
  position: absolute;
  right: 17px;
  top: -9px;
  color: #808080;
  cursor: pointer;
  font-size: 1.2rem;
}
/*-----------------
	3. Helper Class
-----------------------*/

.p-20 {
  padding: 20px !important;
}
.p-t-0 {
  padding-top: 0 !important;
}
.m-0 {
  margin: 0 !important;
}
.m-r-5 {
  margin-right: 5px !important;
}
.m-r-10 {
  margin-right: 10px !important;
}
.m-l-5 {
  margin-left: 5px !important;
}
.m-l-15 {
  margin-left: 15px !important;
}
.m-t-5 {
  margin-top: 5px !important;
}
.m-t-0 {
  margin-top: 0 !important;
}
.m-t-10 {
  margin-top: 10px !important;
}
.m-t-15 {
  margin-top: 15px !important;
}
.m-t-20 {
  margin-top: 20px !important;
}
.m-t-30 {
  margin-top: 30px !important;
}
.m-t-50 {
  margin-top: 50px !important;
}
.m-b-5 {
  margin-bottom: 5px !important;
}
.m-b-10 {
  margin-bottom: 10px !important;
}
.m-b-15 {
  margin-bottom: 15px !important;
}
.m-b-20 {
  margin-bottom: 20px !important;
}
.m-b-30 {
  margin-bottom: 30px !important;
}
.block {
  display: block !important;
}
.cal-icon {
  position: relative;
  width: 100%;
}
.cal-icon:after {
  color: #979797;
  content: "\f073";
  display: block;
  font-family: "FontAwesome";
  font-size: 15px;
  margin: auto;
  position: absolute;
  right: 15px;
  top: 10px;
}
.block {
  display: block !important;
}
.bullets li {
  list-style: inherit;
}
#toggle_btn {
  font-size: 22px;
}
.bg-1 {
  background-color: #0ce0ff;
}
.bg-blue {
  background-color: #1b5a90;
}
.bg-3 {
  background-color: #ffbc00;
}
.bg-4 {
  background-color: #f0142f;
}
.bg-5 {
  background-color: #ffb800;
}
.bg-6 {
  background-color: #42cdff;
}
.bg-7 {
  background-color: #52fb6a;
}
.bg-8 {
  background-color: #f555ff;
}
.table .btn {
  white-space: nowrap;
}
table .badge {
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  font-weight: 400;
  min-width: 75px;
  padding: 7px 12px;
  text-align: center;
}
.feather {
  width: 18px;
  height: 18px;
}

/*-----------------
	4. Bootstrap Classes
-----------------------*/
.btn.focus,
.btn:focus {
  box-shadow: unset;
}
.btn-white {
  background-color: #fff;
  border-color: #e6e9f4;
}
.btn.btn-rounded {
  border-radius: 50px;
}
.bg-primary,
.badge-primary {
  background-color: #0ce0ff !important;
}
a.bg-primary:focus,
a.bg-primary:hover,
button.bg-primary:focus,
button.bg-primary:hover {
  background-color: #621aff !important;
}
.bg-success,
.badge-success {
  background-color: #22cc62 !important;
}
a.bg-success:focus,
a.bg-success:hover,
button.bg-success:focus,
button.bg-success:hover {
  background-color: #1eae55 !important;
}
.bg-info,
.badge-info {
  background-color: #009efb !important;
}
a.bg-info:focus,
a.bg-info:hover,
button.bg-info:focus,
button.bg-info:hover {
  background-color: #028ee1 !important;
}
.bg-warning,
.badge-warning {
  background-color: #ffbc00 !important;
}
a.bg-warning:focus,
a.bg-warning:hover,
button.bg-warning:focus,
button.bg-warning:hover {
  background-color: #e9ab2e !important;
}
.bg-danger,
.badge-danger {
  background-color: #f0142f !important;
}
a.bg-danger:focus,
a.bg-danger:hover,
button.bg-danger:focus,
button.bg-danger:hover {
  background-color: #e63333 !important;
}
.bg-white {
  background-color: #fff;
}
.bg-purple,
.badge-purple {
  background-color: #9368e9 !important;
}
.text-primary,
.dropdown-menu > li > a.text-primary {
  color: #0ce0ff !important;
}
.text-success,
.dropdown-menu > li > a.text-success {
  color: #17d053 !important;
}
.text-danger,
.dropdown-menu > li > a.text-danger {
  color: #f0142f !important;
}
.text-yellow {
  color: #ffbc00 !important;
}
.text-info,
.dropdown-menu > li > a.text-info {
  color: #009efb !important;
}
.text-warning,
.dropdown-menu > li > a.text-warning {
  color: #ffbc34 !important;
}
.text-purple,
.dropdown-menu > li > a.text-purple {
  color: #7460ee !important;
}
.text-muted {
  color: #7e84a3 !important;
}
.btn-primary {
  background-color: #0ce0ff !important;
  border: 1px solid #0ce0ff !important;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary.active,
.btn-primary:active,
.open > .dropdown-toggle.btn-primary {
  background-color: #00dbfb !important;
  border: 1px solid #00dbfb !important;
}
.btn-primary.active.focus,
.btn-primary.active:focus,
.btn-primary.active:hover,
.btn-primary.focus:active,
.btn-primary:active:focus,
.btn-primary:active:hover,
.open > .dropdown-toggle.btn-primary.focus,
.open > .dropdown-toggle.btn-primary:focus,
.open > .dropdown-toggle.btn-primary:hover {
  background-color: #00dbfb !important;
  border: 1px solid #00dbfb !important;
}
.btn-primary.active:not(:disabled):not(.disabled),
.btn-primary:active:not(:disabled):not(.disabled),
.show > .btn-primary.dropdown-toggle {
  background-color: #00dbfb;
  border-color: #00dbfb;
  color: #fff;
}
.btn-primary.active:focus:not(:disabled):not(.disabled),
.btn-primary:active:focus:not(:disabled):not(.disabled),
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-primary.disabled,
.btn-primary:disabled {
  background-color: #0ce0ff;
  border-color: #0ce0ff;
  color: #fff;
}
.btn-secondary {
  background-color: #1b5a90 !important;
  border: 1px solid #1b5a90 !important;
}
.btn-secondary:hover {
  background-color: #08508e !important;
  border: 1px solid #08508e !important;
}
.btn-secondary.active:focus:not(:disabled):not(.disabled),
.btn-secondary:active:focus:not(:disabled):not(.disabled),
.show > .btn-secondary.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-success {
  background-color: #22cc62;
  border: 1px solid #22cc62;
}
.btn-success:hover,
.btn-success:focus,
.btn-success.active,
.btn-success:active,
.open > .dropdown-toggle.btn-success {
  background-color: #1eae55;
  border: 1px solid #1eae55;
  color: #fff;
}
.btn-success.active.focus,
.btn-success.active:focus,
.btn-success.active:hover,
.btn-success.focus:active,
.btn-success:active:focus,
.btn-success:active:hover,
.open > .dropdown-toggle.btn-success.focus,
.open > .dropdown-toggle.btn-success:focus,
.open > .dropdown-toggle.btn-success:hover {
  background-color: #1eae55;
  border: 1px solid #1eae55;
}
.btn-success.active:not(:disabled):not(.disabled),
.btn-success:active:not(:disabled):not(.disabled),
.show > .btn-success.dropdown-toggle {
  background-color: #1eae55;
  border-color: #1eae55;
  color: #fff;
}
.btn-success.active:focus:not(:disabled):not(.disabled),
.btn-success:active:focus:not(:disabled):not(.disabled),
.show > .btn-success.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-success.disabled,
.btn-success:disabled {
  background-color: #22cc62;
  border-color: #22cc62;
  color: #fff;
}
.btn-info {
  background-color: #009efb;
  border: 1px solid #009efb;
}
.btn-info:hover,
.btn-info:focus,
.btn-info.active,
.btn-info:active,
.open > .dropdown-toggle.btn-info {
  background-color: #028ee1;
  border: 1px solid #028ee1;
}
.btn-info.active.focus,
.btn-info.active:focus,
.btn-info.active:hover,
.btn-info.focus:active,
.btn-info:active:focus,
.btn-info:active:hover,
.open > .dropdown-toggle.btn-info.focus,
.open > .dropdown-toggle.btn-info:focus,
.open > .dropdown-toggle.btn-info:hover {
  background-color: #028ee1;
  border: 1px solid #028ee1;
}
.btn-info.active:not(:disabled):not(.disabled),
.btn-info:active:not(:disabled):not(.disabled),
.show > .btn-info.dropdown-toggle {
  background-color: #028ee1;
  border-color: #028ee1;
  color: #fff;
}
.btn-info.active:focus:not(:disabled):not(.disabled),
.btn-info:active:focus:not(:disabled):not(.disabled),
.show > .btn-info.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-info.disabled,
.btn-info:disabled {
  background-color: #009efb;
  border-color: #009efb;
  color: #fff;
}
.btn-warning {
  background-color: #ffbc34;
  border: 1px solid #ffbc34;
}
.btn-warning:hover,
.btn-warning:focus,
.btn-warning.active,
.btn-warning:active,
.open > .dropdown-toggle.btn-warning {
  background-color: #e9ab2e;
  border: 1px solid #e9ab2e;
}
.btn-warning.active.focus,
.btn-warning.active:focus,
.btn-warning.active:hover,
.btn-warning.focus:active,
.btn-warning:active:focus,
.btn-warning:active:hover,
.open > .dropdown-toggle.btn-warning.focus,
.open > .dropdown-toggle.btn-warning:focus,
.open > .dropdown-toggle.btn-warning:hover {
  background-color: #e9ab2e;
  border: 1px solid #e9ab2e;
}
.btn-warning.active:not(:disabled):not(.disabled),
.btn-warning:active:not(:disabled):not(.disabled),
.show > .btn-danger.dropdown-toggle {
  background-color: #e9ab2e;
  border-color: #e9ab2e;
  color: #fff;
}
.btn-warning.active:focus:not(:disabled):not(.disabled),
.btn-warning:active:focus:not(:disabled):not(.disabled),
.show > .btn-warning.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-warning.disabled,
.btn-warning:disabled {
  background-color: #ffbc34;
  border-color: #ffbc34;
  color: #fff;
}
.badge-secondary {
  background-color: #621aff !important;
}
.btn-danger {
  background-color: #ef3737;
  border: 1px solid #ef3737;
}
.btn-danger:hover,
.btn-danger:focus,
.btn-danger.active,
.btn-danger:active,
.open > .dropdown-toggle.btn-danger {
  background-color: #ec1313;
  border: 1px solid #ec1313;
}
.btn-danger.active.focus,
.btn-danger.active:focus,
.btn-danger.active:hover,
.btn-danger.focus:active,
.btn-danger:active:focus,
.btn-danger:active:hover,
.open > .dropdown-toggle.btn-danger.focus,
.open > .dropdown-toggle.btn-danger:focus,
.open > .dropdown-toggle.btn-danger:hover {
  background-color: #ec1313;
  border: 1px solid #ec1313;
}
.btn-danger.active:not(:disabled):not(.disabled),
.btn-danger:active:not(:disabled):not(.disabled),
.show > .btn-danger.dropdown-toggle {
  background-color: #ec1313;
  border-color: #ec1313;
  color: #fff;
}
.btn-danger.active:focus:not(:disabled):not(.disabled),
.btn-danger:active:focus:not(:disabled):not(.disabled),
.show > .btn-danger.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-danger.disabled,
.btn-danger:disabled {
  background-color: #f62d51;
  border-color: #f62d51;
  color: #fff;
}
.btn-light.active:focus:not(:disabled):not(.disabled),
.btn-light:active:focus:not(:disabled):not(.disabled),
.show > .btn-light.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-dark.active:focus:not(:disabled):not(.disabled),
.btn-dark:active:focus:not(:disabled):not(.disabled),
.show > .btn-dark.dropdown-toggle:focus {
  box-shadow: unset;
}
.btn-outline-primary {
  color: #0ce0ff;
  border-color: #0ce0ff;
}
.btn-outline-primary:hover {
  background-color: #0ce0ff;
  border-color: #0ce0ff;
}
.btn-outline-primary:focus,
.btn-outline-primary.focus {
  box-shadow: none;
}
.btn-outline-primary.disabled,
.btn-outline-primary:disabled {
  color: #0ce0ff;
  background-color: transparent;
}
.btn-outline-primary:not(:disabled):not(.disabled):active,
.btn-outline-primary:not(:disabled):not(.disabled).active,
.show > .btn-outline-primary.dropdown-toggle {
  background-color: #0ce0ff;
  border-color: #0ce0ff;
}
.btn-outline-primary:not(:disabled):not(.disabled):active:focus,
.btn-outline-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-primary.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-outline-secondary {
  color: #1b5a90;
  border-color: #1b5a90;
}
.btn-outline-secondary:hover {
  background-color: #1b5a90;
  border-color: #1b5a90;
}
.btn-check:active + .btn-outline-secondary,
.btn-check:checked + .btn-outline-secondary,
.btn-outline-secondary.active,
.btn-outline-secondary.dropdown-toggle.show,
.btn-outline-secondary:active {
  background-color: #1b5a90;
  border-color: #1b5a90;
}
.btn-outline-secondary.disabled,
.btn-outline-secondary:disabled {
  color: #1b5a90;
}
.btn-outline-success {
  color: #22cc62;
  border-color: #22cc62;
}
.btn-outline-success:hover {
  background-color: #22cc62;
  border-color: #22cc62;
}
.btn-outline-success:focus,
.btn-outline-success.focus {
  box-shadow: none;
}
.btn-outline-success.disabled,
.btn-outline-success:disabled {
  color: #22cc62;
  background-color: transparent;
}
.btn-outline-success:not(:disabled):not(.disabled):active,
.btn-outline-success:not(:disabled):not(.disabled).active,
.show > .btn-outline-success.dropdown-toggle {
  background-color: #22cc62;
  border-color: #22cc62;
}
.btn-outline-success:not(:disabled):not(.disabled):active:focus,
.btn-outline-success:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-success.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-outline-info {
  color: #00bcd4;
  border-color: #00bcd4;
}
.btn-outline-info:hover {
  color: #fff;
  background-color: #00bcd4;
  border-color: #00bcd4;
}
.btn-outline-info:focus,
.btn-outline-info.focus {
  box-shadow: none;
}
.btn-outline-info.disabled,
.btn-outline-info:disabled {
  background-color: transparent;
  color: #00bcd4;
}
.btn-outline-info:not(:disabled):not(.disabled):active,
.btn-outline-info:not(:disabled):not(.disabled).active,
.show > .btn-outline-info.dropdown-toggle {
  background-color: #00bcd4;
  border-color: #00bcd4;
}
.btn-outline-info:not(:disabled):not(.disabled):active:focus,
.btn-outline-info:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-info.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-outline-warning {
  color: #ffbc34;
  border-color: #ffbc34;
}
.btn-outline-warning:hover {
  color: #212529;
  background-color: #ffbc34;
  border-color: #ffbc34;
}
.btn-outline-warning:focus,
.btn-outline-warning.focus {
  box-shadow: none;
}
.btn-outline-warning.disabled,
.btn-outline-warning:disabled {
  background-color: transparent;
  color: #ffbc34;
}
.btn-outline-warning:not(:disabled):not(.disabled):active,
.btn-outline-warning:not(:disabled):not(.disabled).active,
.show > .btn-outline-warning.dropdown-toggle {
  color: #212529;
  background-color: #ffbc34;
  border-color: #ffbc34;
}
.btn-outline-warning:not(:disabled):not(.disabled):active:focus,
.btn-outline-warning:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-warning.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-outline-danger {
  color: #ef3737;
  border-color: #ef3737;
}
.btn-outline-danger:hover {
  color: #fff;
  background-color: #ef3737;
  border-color: #ef3737;
}
.btn-outline-danger:focus,
.btn-outline-danger.focus {
  box-shadow: none;
}
.btn-outline-danger.disabled,
.btn-outline-danger:disabled {
  background-color: transparent;
  color: #ef3737;
}
.btn-outline-danger:not(:disabled):not(.disabled):active,
.btn-outline-danger:not(:disabled):not(.disabled).active,
.show > .btn-outline-danger.dropdown-toggle {
  background-color: #ef3737;
  border-color: #ef3737;
}
.btn-outline-danger:not(:disabled):not(.disabled):active:focus,
.btn-outline-danger:not(:disabled):not(.disabled).active:focus,
.show > .btn-outline-danger.dropdown-toggle:focus {
  box-shadow: none;
}
.btn-outline-light {
  color: #ababab;
  border-color: #e6e6e6;
}
.btn-outline-light.disabled,
.btn-outline-light:disabled {
  color: #ababab;
}
.pagination > .active > a,
.pagination > .active > a:focus,
.pagination > .active > a:hover,
.pagination > .active > span,
.pagination > .active > span:focus,
.pagination > .active > span:hover {
  background-color: #0ce0ff;
  border-color: #0ce0ff;
}
.pagination > li > a,
.pagination > li > span {
  color: #131523;
}
.page-link:hover {
  color: #0ce0ff;
}
.page-link:focus {
  box-shadow: unset;
}
.page-item.active .page-link {
  background-color: #0ce0ff;
  border-color: #0ce0ff;
}
.dropdown-menu {
  border: 1px solid #eff2f7;
  border-radius: 0.8rem;
  transform-origin: left top 0;
  background-color: #fff;
  box-shadow: 0 0 1.25rem rgba(31, 45, 61, 0.08);
}
.navbar-nav .open .dropdown-menu {
  border: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.dropdown-menu {
  font-size: 14px;
}
.card {
  border: 1px solid #f0f0f0;
  margin-bottom: 1.875rem;
}
.card-body {
  /* padding: 1.5rem; */
}
.card-body h5 {
  font-size: large;
  font-weight: 500;
}
.card-header {
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem 1.5rem;
}
.card-footer {
  background-color: #fff;
  border-top: 1px solid #e6e6e6;
  padding: 1rem 1.5rem;
}
.card .card-header {
  background-color: #fff;
  border-bottom: 1px solid #eaeaea;
}
.card .card-header .card-title {
  margin-bottom: 0;
}
.table .thead-light th {
  color: #131523;
  background-color: #f4f6ff;
  border-color: #eff2f7;
  border-bottom: 0;
}
.card .card-header .card-title {
  margin-bottom: 0;
  font-size: large;
  font-weight: 500;
}
.modal-footer.text-left {
  text-align: left;
}
.modal-footer.text-center {
  text-align: center;
}
.btn-light {
  border-color: #e6e6e6;
  color: #a6a6a6;
}
.bootstrap-datetimepicker-widget table td.active,
.bootstrap-datetimepicker-widget table td.active:hover {
  background-color: #0ce0ff;
  text-shadow: unset;
}
.bootstrap-datetimepicker-widget table td.today:before {
  border-bottom-color: #0ce0ff;
}
.bg-info-light {
  background-color: rgba(2, 182, 179, 0.12) !important;
  color: #1db9aa !important;
}
.bg-primary-light {
  background-color: rgba(17, 148, 247, 0.12) !important;
  color: #2196f3 !important;
}
.bg-danger-light {
  background-color: rgba(242, 17, 54, 0.12) !important;
  color: #e63c3c !important;
}
.bg-warning-light {
  background-color: rgba(255, 152, 0, 0.12) !important;
  color: #f39c12 !important;
}
.bg-success-light {
  background-color: rgba(15, 183, 107, 0.12) !important;
  color: #26af48 !important;
}
.bg-purple-light {
  background-color: rgba(197, 128, 255, 0.12) !important;
  color: #c580ff !important;
}
.bg-default-light {
  background-color: rgba(40, 52, 71, 0.12) !important;
  color: #283447 !important;
}

/*-----------------
	5. Select2
-----------------------*/

.select2-container .select2-selection--single {
  border: 1px solid #ddd;
  height: 40px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 38px;
  right: 7px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #ddd transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  height: 0;
  left: 50%;
  margin-left: -10px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: transparent transparent #ddd;
  border-width: 0 6px 6px;
}
.select2-container .select2-selection--single .select2-selection__rendered {
  padding-right: 30px;
  padding-left: 15px;
}
.select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  color: #333;
  font-size: 15px;
  font-weight: normal;
  line-height: 38px;
}
.select2-container--default
  .select2-results__option--highlighted[aria-selected] {
  background-color: #00d0f1;
}
.select2-container--default .select2-selection--multiple {
  border: 1px solid #ddd;
  min-height: 40px;
}

/*-----------------
	6. Nav Tabs
-----------------------*/

ul.nav-tabs {
  border-bottom: 1px solid var(--theme-box-shadow-light);
}
.card-header-tabs {
  border-bottom: 0;
}
ul.nav-tabs > li > a {
  margin-right: 0;
  color: #888;
  border-radius: 0;
}

.nav-tabs .nav-link {
  color: var(--theme-text);
}
.nav-tabs .nav-link.active {
  border: none !important;
  border-bottom: 3px solid #009efb !important;
}
.nav-tabs.nav-tabs-solid > li > a {
  color: #333;
}
.nav-tabs.nav-tabs-solid > .active > a,
.nav-tabs.nav-tabs-solid > .active > a:hover,
.nav-tabs.nav-tabs-solid > .active > a:focus {
  background-color: #00d0f1;
  border-color: #00d0f1;
  color: #fff;
}
.tab-content {
  padding-top: 20px;
}
.nav-tabs .nav-link {
  border-radius: 0;
}
.nav-tabs .nav-link:focus,
.nav-tabs .nav-link:hover {
  background-color: #eee;
  border-color: transparent;
  color: #333;
}
.nav-tabs.nav-justified > li > a {
  border-radius: 0;
  margin-bottom: 0;
}
.nav-tabs.nav-justified > li > a:hover,
.nav-tabs.nav-justified > li > a:focus {
  border-bottom-color: #ddd;
}
.nav-tabs.nav-justified.nav-tabs-solid > li > a {
  border-color: transparent;
}
.nav-tabs.nav-tabs-solid > li > a {
  color: #333;
}
.nav-tabs.nav-tabs-solid > li > a.active,
.nav-tabs.nav-tabs-solid > li > a.active:hover,
.nav-tabs.nav-tabs-solid > li > a.active:focus {
  background-color: #00d0f1;
  border-color: #00d0f1;
  color: #fff;
}
.nav-tabs.nav-tabs-solid.nav-tabs-rounded {
  border-radius: 50px;
}
.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a {
  border-radius: 50px;
}
.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active,
.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active:hover,
.nav-tabs.nav-tabs-solid.nav-tabs-rounded > li > a.active:focus {
  border-radius: 50px;
}
.nav-tabs-justified {
  border-radius: 0;
  margin-bottom: 0;
}
.nav-tabs-justified > li > a:hover,
.nav-tabs-justified > li > a:focus {
  border-bottom-color: #ddd;
}
.nav-tabs-justified.nav-tabs-solid > li > a {
  border-color: transparent;
}
.nav-tabs.nav-justified.nav-tabs-top {
  border-bottom: 1px solid #ddd;
}
.nav-tabs.nav-justified.nav-tabs-top > li > a,
.nav-tabs.nav-justified.nav-tabs-top > li > a:hover,
.nav-tabs.nav-justified.nav-tabs-top > li > a:focus {
  border-width: 2px 0 0 0;
}
.nav-tabs.nav-tabs-top > li {
  margin-bottom: 0;
}
.nav-tabs.nav-tabs-top > li > a,
.nav-tabs.nav-tabs-top > li > a:hover,
.nav-tabs.nav-tabs-top > li > a:focus {
  border-width: 2px 0 0 0;
}
.nav-tabs.nav-tabs-top > li.open > a,
.nav-tabs.nav-tabs-top > li > a:hover,
.nav-tabs.nav-tabs-top > li > a:focus {
  border-top-color: #ddd;
}
.nav-tabs.nav-tabs-top > li + li > a {
  margin-left: 1px;
}
.nav-tabs.nav-tabs-top > li > a.active,
.nav-tabs.nav-tabs-top > li > a.active:hover,
.nav-tabs.nav-tabs-top > li > a.active:focus {
  border-top-color: #00d0f1;
}
.nav-tabs.nav-tabs-bottom > li {
  margin-bottom: -1px;
}
.nav-tabs.nav-tabs-bottom .active,
.nav-tabs.nav-tabs-bottom .active:hover,
.nav-tabs.nav-tabs-bottom .active:focus {
  border-bottom-width: 2px;
  border-color: transparent;
  border-bottom-color: #00d0f1;
  background-color: transparent;
  transition: none 0s ease 0s;
  -moz-transition: none 0s ease 0s;
  -o-transition: none 0s ease 0s;
  -ms-transition: none 0s ease 0s;
  -webkit-transition: none 0s ease 0s;
}
.user_tabs_tab:active,
.user_tabs_tab:hover,
.user_tabs_tab:hover {
  border-bottom-width: 2px;
  border-color: transparent;
  border-bottom-color: #00d0f1;
  background-color: transparent;
  transition: none 0s ease 0s;
  -moz-transition: none 0s ease 0s;
  -o-transition: none 0s ease 0s;
  -ms-transition: none 0s ease 0s;
  -webkit-transition: none 0s ease 0s;
}
.nav-tabs.nav-tabs-solid {
  background-color: #fafafa;
  border: 0;
}
.nav-tabs.nav-tabs-solid > li {
  margin-bottom: 0;
}
.nav-tabs.nav-tabs-solid > li > a {
  border-color: transparent;
}
.nav-tabs.nav-tabs-solid > li > a:hover,
.nav-tabs.nav-tabs-solid > li > a:focus {
  background-color: #f5f5f5;
}
.nav-tabs.nav-tabs-solid > .open:not(.active) > a {
  background-color: #f5f5f5;
  border-color: transparent;
}
.nav-tabs-justified.nav-tabs-top {
  border-bottom: 1px solid #ddd;
}
.nav-tabs-justified.nav-tabs-top > li > a,
.nav-tabs-justified.nav-tabs-top > li > a:hover,
.nav-tabs-justified.nav-tabs-top > li > a:focus {
  border-width: 2px 0 0 0;
}
/*-----------------
	new
-----------------------*/

/*-----------------
	7. Components
-----------------------*/

.section-header {
  margin-bottom: 1.875rem;
}
.section-header .section-title {
  color: #333;
}
.line {
  background-color: #00d0f1;
  height: 2px;
  margin: 0;
  width: 60px;
}
.comp-buttons .btn {
  margin-bottom: 5px;
}
.pagination-box .pagination {
  margin-top: 0;
}
.comp-dropdowns .btn-group {
  margin-bottom: 5px;
}
.progress-example .progress {
  margin-bottom: 1.5rem;
}
.progress-xs {
  height: 4px;
}
.progress-sm {
  height: 15px;
}
.progress.progress-sm {
  height: 6px;
}
.progress.progress-md {
  height: 8px;
}
.progress.progress-lg {
  height: 18px;
}
.row.row-sm {
  margin-left: -3px;
  margin-right: -3px;
}
.row.row-sm > div {
  padding-left: 3px;
  padding-right: 3px;
}
.table-responsive {
  white-space: nowrap;
}

/* Avatar */

.avatar {
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 3rem;
}
.avatar > img {
  width: 100%;
  height: 100%;
  -o-object-fit: contain;
  object-fit: contain;
}
.avatar-title {
  width: 100%;
  height: 100%;
  background-color: #00d0f1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.avatar-away:before,
.avatar-offline:before,
.avatar-online:before {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 25%;
  border-radius: 50%;
  content: "";
  border: 2px solid #fff;
}
.avatar-online:before {
  background-color: #7bb13c;
}
.avatar-offline:before {
  background-color: #e84646;
}
.avatar-away:before {
  background-color: #ffbc34;
}
.avatar .border {
  border-width: 3px !important;
}
.avatar .rounded {
  border-radius: 6px !important;
}
.avatar .avatar-title {
  font-size: 18px;
}
.avatar-xs {
  width: 1.65rem;
  height: 1.65rem;
}
.avatar-xs .border {
  border-width: 2px !important;
}
.avatar-xs .rounded {
  border-radius: 4px !important;
}
.avatar-xs .avatar-title {
  font-size: 12px;
}
.avatar-xs.avatar-away:before,
.avatar-xs.avatar-offline:before,
.avatar-xs.avatar-online:before {
  border-width: 1px;
}
.avatar-sm {
  width: 2.5rem;
  height: 2.5rem;
}
.avatar-sm .border {
  border-width: 3px !important;
}
.avatar-sm .rounded {
  border-radius: 4px !important;
}
.avatar-sm .avatar-title {
  font-size: 15px;
}
.avatar-sm.avatar-away:before,
.avatar-sm.avatar-offline:before,
.avatar-sm.avatar-online:before {
  border-width: 2px;
}
.avatar-lg {
  width: 3.75rem;
  height: 3.75rem;
}
.avatar-lg .border {
  border-width: 3px !important;
}
.avatar-lg .rounded {
  border-radius: 8px !important;
}
.avatar-lg .avatar-title {
  font-size: 24px;
}
.avatar-lg.avatar-away:before,
.avatar-lg.avatar-offline:before,
.avatar-lg.avatar-online:before {
  border-width: 3px;
}
.avatar-xl {
  width: 5rem;
  height: 5rem;
}
.avatar-xl .border {
  border-width: 4px !important;
}
.avatar-xl .rounded {
  border-radius: 8px !important;
}
.avatar-xl .avatar-title {
  font-size: 28px;
}
.avatar-xl.avatar-away:before,
.avatar-xl.avatar-offline:before,
.avatar-xl.avatar-online:before {
  border-width: 4px;
}
.avatar-xxl {
  width: 5.125rem;
  height: 5.125rem;
}
.avatar-xxl .border {
  border-width: 6px !important;
}
.avatar-xxl .rounded {
  border-radius: 8px !important;
}
.avatar-xxl .avatar-title {
  font-size: 30px;
}
.avatar-xxl.avatar-away:before,
.avatar-xxl.avatar-offline:before,
.avatar-xxl.avatar-online:before {
  border-width: 4px;
}
.avatar-group {
  display: inline-flex;
}
.avatar-group .avatar + .avatar {
  margin-left: -0.75rem;
}
.avatar-group .avatar-xs + .avatar-xs {
  margin-left: -0.40625rem;
}
.avatar-group .avatar-sm + .avatar-sm {
  margin-left: -0.625rem;
}
.avatar-group .avatar-lg + .avatar-lg {
  margin-left: -1rem;
}
.avatar-group .avatar-xl + .avatar-xl {
  margin-left: -1.28125rem;
}
.avatar-group .avatar:hover {
  z-index: 1;
}

/*-----------------
	8. Header
-----------------------*/
.header {
  background-color: var(--theme-box-shadow-light);
  color: var(--foreground);
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1002;
  height: 60px;
  border-bottom: 1px solid var(--theme-overlay-invert);
}
.header .header-left {
  float: left;
  height: 60px;
  padding: 0 15px;
  position: relative;
  text-align: left;
  width: 200px;
  border-bottom: 1px solid var(--theme-overlay-invert);
  z-index: 1;
  transition: all 0.2s ease-in-out;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: space-between;
}
.logo_mini {
  display: none;
}
.logocollapse .logo_big {
  display: none;
}
.logocollapse .logo_mini {
  display: inherit;
  margin: 0 0.5rem 0 0;
}
.logocollapse .header-left {
  width: 3rem;
}
.header .header-left .logo {
  display: inline-block;
  line-height: 60px;
}
.header .header-left .logo img {
  max-height: 45px;
  width: auto;
}
.btn_new {
  display: none;
}
/* .header-left .logo.logo-small {
  display: none;
} */
.header .dropdown-menu > li > a {
  position: relative;
}
.header .dropdown-toggle:after {
  display: none;
}
.header .has-arrow .dropdown-toggle:after {
  border-top: 0;
  border-left: 0;
  border-bottom: 2px solid #333;
  border-right: 2px solid #333;
  content: "";
  height: 8px;
  display: inline-block;
  pointer-events: none;
  -webkit-transform-origin: 66% 66%;
  -transform-origin: 66% 66%;
  transform-origin: 66% 66%;
  -webkit-transform: rotate(45deg);
  -transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  width: 8px;
  vertical-align: 2px;
}
.header .has-arrow .dropdown-toggle[aria-expanded="true"]:after {
  -webkit-transform: rotate(-135deg);
  -transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.user-menu {
  float: right;
  margin: 0;
  margin-top: 0.5rem;
  position: relative;
  z-index: 99;
  display: flex !important;
  align-items: center;
  /* padding-right: 20px; */
}
.user-menu.nav > li > a {
  color: #333;
  font-size: 14px;
  padding: 0 15px;
}
.user-img {
  display: inline-block;
  margin-right: 3px;
  position: relative;
}
.user-img img {
  width: 32px;
  border: 2px solid #eef1fe;
  border-radius: 50%;
}
.dropdown-item img {
  margin-right: 5px;
}
.user-menu.nav > li > a.mobile_btn {
  border: 0;
  position: relative;
  padding: 0;
  margin: 0;
  cursor: pointer;
}
.user-menu .dropdown-menu {
  min-width: 220px;
  padding: 0;
  transform: translate(0px, 59px) !important;
}
.user-menu .dropdown-menu .dropdown-item {
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  padding: 10px 15px;
}
.user-menu .dropdown-menu .dropdown-item:hover {
  color: #0ce0ff;
  background-color: transparent;
}
.dropdown-item-title {
  margin-left: 0.4rem;
}
.user-menu.nav > li.main-drop > a {
  padding-right: 0;
}
.user-menu.nav-tabs .nav-link:focus,
.user-menu.nav-tabs .nav-link:hover {
  background-color: transparent;
}
.user-header {
  background-color: #f5f6fa;
  border-radius: 5px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  padding: 10px;
}
.user-header:before,
.notifications:before {
  border: 7px solid #fff;
  border-color: transparent transparent #fff #fff;
  box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
  content: "";
  right: 0;
  position: absolute;
  top: 2px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.user-header:before {
  border: 7px solid #f5f6fa;
  border-color: transparent transparent #f5f6fa #f5f6fa;
}
.user-header .avatar {
  width: auto;
}
.user-header .avatar img {
  width: 28px;
  height: 28px;
}
.user-header .user-text {
  margin-left: 10px;
}
.user-header .user-text h6 {
  margin-bottom: 2px;
}
.user-menu.nav > li > a.dark-mode-toggle {
  width: 56px;
  height: 28px;
  background-color: #fff;
  color: rgb(10, 10, 10);
  font-size: 16px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  border: 1px solid rgba(66, 139, 193, 0.22);
  border-radius: 3px;
  margin: 15px 15px 15px 0;
  padding: 1px;
}
.user-menu.nav > li > a.dark-mode-toggle i {
  font-size: 15px;
  color: #fff;
  background: #fff;
  border-radius: 2px;
  line-height: 24px;
  width: 26px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
}
.user-menu.nav > li > a.dark-mode-toggle i.light-mode.active,
.user-menu.nav > li > a.dark-mode-toggle i.dark-mode.active {
  background: #1b5a90;
  color: #fff;
}
.user-menu.nav > li > a.dark-mode-toggle i.dark-mode,
.user-menu.nav > li > a.dark-mode-toggle i.light-mode {
  color: #1b5a90;
}

.header .dropdown-menu > li > a:focus,
.header .dropdown-menu > li > a:hover {
  background-color: #0ce0ff;
  color: #fff;
}
.header .dropdown-menu > li > a:focus i,
.header .dropdown-menu > li > a:hover i {
  color: #fff;
}
.header .dropdown-menu > li > a {
  padding: 10px 18px;
}
.header .dropdown-menu > li > a i {
  color: #0ce0ff;
  margin-right: 10px;
  text-align: center;
  width: 18px;
}
.header .user-menu .dropdown-menu > li > a i {
  color: #0ce0ff;
  font-size: 16px;
  margin-right: 10px;
  min-width: 18px;
  text-align: center;
}
.header .user-menu .dropdown-menu > li > a:focus i,
.header .user-menu .dropdown-menu > li > a:hover i {
  color: #fff;
}
.mobile_btn {
  display: none;
  float: left;
}
.slide-nav .sidebar {
  margin-left: 0;
}
.menu-title {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  padding: 0 25px;
}
.sidebar-overlay {
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  height: 100%;
  left: 0;
  position: fixed;
  top: 60px;
  width: 100%;
  z-index: 1000;
}
.sidebar-overlay.opened {
  display: block;
}
html.menu-opened {
  overflow: hidden;
}
html.menu-opened body {
  overflow: hidden;
}

/* Search */

.top-nav-search {
  float: left;
  margin-left: 20px;
}
.top-nav-search form {
  margin-top: 10px;
  position: relative;
  width: 230px;
}
.top-nav-search .form-control {
  border-color: transparent !important;
  background: transparent;
  border-radius: 0.5rem;
  color: #7e84a3;
  height: 40px;
  padding: 10px 10px 10px 38px;
}
.top-nav-search .btn {
  background-color: transparent;
  border-color: transparent;
  color: #7e84a3;
  min-height: 40px;
  padding: 7px 15px;
  position: absolute;
  left: 0;
  top: 0;
}
.top-nav-search.active form {
  display: block;
  left: 0;
  position: absolute;
}
.search {
  position: relative;
  margin: 0 auto;
}
.search input:focus {
  outline: none;
  border-color: transparent;
  box-shadow: none;
}
.search input:focus + .results {
  display: block;
}
.search input {
  position: relative;
}
.s-icon {
  position: absolute;
  left: 15px;
  top: 10px;
  z-index: 9;
  color: #7e84a3;
}
.search .results {
  display: none;
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  margin: 0;
  background: #ffffff;
  border: 1px solid #eef1fe;
  box-shadow: 0px 4px 4px #eef1fe;
  width: 581px;
  padding: 20px 20px 0 20px;
}
.search .results:before {
  border: 7px solid #fff;
  border-color: transparent transparent #fff #fff;
  box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
  content: "";
  left: 35px;
  position: absolute;
  top: 2px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.search .results li {
  display: block;
}
.search .results li {
  margin-bottom: 20px;
}
.search .results li h6 {
  font-weight: 400;
  color: #0ce0ff;
  margin-bottom: 2px;
}
.search .results li p {
  color: #7e84a3;
}
.search .results li p span {
  color: #7e84a3;
  /* text-decoration: underline; */
}
.search .results li p span a {
  color: #7e84a3;
}
/*------search new -------*/

/*-----------------
	9. Sidebar
-----------------------*/
.main_page {
  display: flex;
}
.Sidebar.collapsed {
  width: 65px;
  transition: 0.5s;
  margin-top: 4rem;
}
.Sidebar.collapsed span {
  display: none;
}
.Sidebar.collapsed:hover span {
  display: inherit;
  margin-left: 1rem;
}
.Sidebar.collapsed:hover {
  width: 250px;
}

.sidebar {
  height: 55rem;
  background-color: var(--theme-box-shadow-light);
  color: var(--foreground);
  bottom: 0;
  left: 0;
  margin-top: 3.9rem;
  /* position: fixed; */
  transition: all 0.2s ease-in-out 0s;
  width: 288px;
  z-index: 1001;
  box-shadow: 0px 4px 4px #eef1fe;
  overflow-y: hidden;
}
.sidebar:hover {
  overflow-y: scroll;
  transition: 0.5s;
}
.sidebar::-webkit-scrollbar-track {
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  /* border-radius: 10px; */
  background-color: var(--theme-box-shadow-light);
}

.sidebar::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
.sidebar::-webkit-scrollbar-thumb {
  border-radius: 8px;
  /* -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); */
  background-color: var(--theme-table-row);
}
.sidebar.opened {
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
.sidebar-inner {
  height: 100%;
  min-height: 100%;
  transition: all 0.2s ease-in-out 0s;
}
.sidebar-menu ul {
  background-color: var(--theme-box-shadow-light);
  font-size: 15px;
  list-style-type: none;
  margin: 0;
  padding: 20px 0;
  position: relative;
}
.sidebar-menu li a {
  color: var(--foreground);
  display: block;
  font-size: 14px;
  font-weight: 450;
  height: auto;
  padding: 0 20px;
}
.sidebar-menu li a:hover {
  color: #0ce0ff;
}
.sidebar-menu > ul > li > a:hover {
  color: #0ce0ff;
}
.sidebar-menu li.active > a {
  color: #0ce0ff;
  position: relative;
}
.menu-title {
  color: #7e84a3;
  display: flex;
  display: -ms-flexbox;
  font-size: 14px;
  font-weight: 600;
  opacity: 1;
  padding: 5px 15px;
  white-space: nowrap;
  position: relative;
}
.menu-title:before {
  border-top: 1px solid var(--theme-overlay-invert);
  content: "";
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 20px;
  right: 20px;
  bottom: 0;
  width: 83%;
  z-index: -1;
}
.menu-title span {
  background-color: var(--theme-box-shadow-light);
  padding-right: 10px;
}
.menu-title > i {
  float: right;
  line-height: 40px;
}
.sidebar-menu li.menu-title a {
  color: #ff9b44;
  display: inline-block;
  margin-left: auto;
  padding: 0;
}
.sidebar-menu li.menu-title a.btn {
  color: #fff;
  display: block;
  float: none;
  font-size: 15px;
  margin-bottom: 15px;
  padding: 10px 15px;
}
.sidebar-menu ul ul a.active {
  color: #0ce0ff;
}
.mobile_btn {
  display: none;
  float: left;
}
.sidebar .sidebar-menu > ul > li > a span {
  transition: all 0.2s ease-in-out 0s;
  display: inline-block;
  margin-left: 10px;
  white-space: nowrap;
}
.sidebar .sidebar-menu > ul > li > a span.chat-user {
  margin-left: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}
.sidebar .sidebar-menu > ul > li > a span.badge {
  margin-left: auto;
}
.sidebar-menu ul ul a {
  display: block;
  font-size: 13px;
  padding: 7px 0px 7px 0px;
  margin: 0 15px 0 40px;
  border-bottom: 1px solid #f4f6ff;
  position: relative;
  color: #7e84a3;
}
.sidebar-menu ul ul {
  display: none;
  padding: 0;
}
.sidebar-menu ul ul ul a {
  padding-left: 10px;
}
.sidebar-menu ul ul ul ul a {
  padding-left: 10px;
}
.sidebar-menu > ul > li {
  margin-bottom: 3px;
  position: relative;
}
.sidebar-menu > ul > li:last-child {
  margin-bottom: 25px;
}
.sidebar-menu .menu-arrow {
  -webkit-transition: -webkit-transform 0.15s;
  -o-transition: -o-transform 0.15s;
  transition: transform 0.15s;
  position: absolute;
  right: 15px;
  display: inline-block;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  text-rendering: auto;
  line-height: 40px;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translate(0, 0);
  -transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0);
  line-height: 18px;
  top: 11px;
}
.sidebar-menu .menu-arrow:before {
  content: "\f105";
}
.sidebar-menu li a.subdrop .menu-arrow {
  background-color: #00bcd4;
  -transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sidebar-menu ul ul a .menu-arrow {
  top: 10px;
  right: 0;
}
.sidebar-menu > ul > li > a {
  align-items: center;
  display: flex;
  display: -ms-flexbox;
  justify-content: flex-start;
  padding: 8px 15px;
  position: relative;
  transition: all 0.2s ease-in-out 0s;
}
.sidebar-menu > ul > li > a svg {
  width: 18px;
}
.sidebar-menu ul li a i {
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  vertical-align: middle;
  width: 20px;
  transition: all 0.2s ease-in-out 0s;
}
.sidebar-menu ul li a {
  color: var(--theme-overlay);
}
.sidebar-menu ul li.menu-title a i {
  font-size: 16px !important;
  margin-right: 0;
  text-align: right;
  width: auto;
}
.sidebar-menu li a > .badge {
  color: #fff;
}
.event-form .input-group .form-control {
  height: 40px;
}
.submit-section {
  text-align: center;
  margin-top: 40px;
}
.submit-btn {
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  min-width: 200px;
  padding: 10px 20px;
}
.dropdown-action {
  margin-bottom: 5px;
}
.dropdown-action .dropdown-toggle:after {
  display: none;
}
.action-icon {
  color: #333;
  font-size: 18px;
  display: inline-block;
}

/*-----------------
	6. Toggle Button
-----------------------*/

.check {
  display: block;
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  position: absolute;
}
.checktoggle {
  background-color: #e0001a;
  border-radius: 12px;
  cursor: pointer;
  display: block;
  font-size: 0;
  height: 24px;
  margin-bottom: 0;
  position: relative;
  width: 48px;
}
.checktoggle:after {
  content: " ";
  display: block;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(5px, -50%);
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 50%;
  transition: left 300ms ease, transform 300ms ease;
}
.check:checked + .checktoggle {
  background-color: #55ce63;
}
.check:checked + .checktoggle:after {
  left: 100%;
  transform: translate(calc(-100% - 5px), -50%);
}
.onoffswitch {
  margin-left: auto;
  position: relative;
  width: 73px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.onoffswitch-checkbox {
  display: none;
}
.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border-radius: 20px;
  margin-bottom: 0;
}
.onoffswitch-inner {
  display: block;
  margin-left: -100%;
  transition: margin 0.3s ease-in 0s;
  width: 200%;
}
.onoffswitch-inner:before,
.onoffswitch-inner:after {
  box-sizing: border-box;
  color: #fff;
  display: block;
  float: left;
  font-size: 16px;
  height: 30px;
  line-height: 32px;
  padding: 0;
  width: 50%;
}
.onoffswitch-inner:before {
  background-color: #55ce63;
  color: #fff;
  content: "ON";
  padding-left: 14px;
}
.onoffswitch-inner:after {
  content: "OFF";
  padding-right: 14px;
  background-color: #ccc;
  color: #fff;
  text-align: right;
}
.onoffswitch-switch {
  background: #fff;
  border-radius: 20px;
  bottom: 0;
  display: block;
  height: 20px;
  margin: 5px;
  position: absolute;
  right: 43px;
  top: 0;
  transition: all 0.3s ease-in 0s;
  width: 20px;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-inner {
  margin-left: 0;
}
.onoffswitch-checkbox:checked + .onoffswitch-label .onoffswitch-switch {
  right: 0px;
}

/*-----------------
	10. Content
-----------------------*/
.main-wrapper {
  background-color: var(--background);
  color: var(--foreground);
  width: 100%;
  height: 100vh;
  min-height: 100vh;
}
.page-wrapper {
  margin-left: 10px;
  background-color: var(--background);
  color: var(--foreground);
  padding-top: 60px;
  position: relative;
  transition: all 0.4s ease;
}
.content {
  padding: 1.875rem 1.875rem;
}
.page-header {
  margin-bottom: 1.875rem;
}
.content-wrap {
  display: flex;
  display: -ms-flexbox;
  flex-direction: column;
  min-height: calc(100vh - 60px);
}
.page-header .breadcrumb {
  background-color: transparent;
  color: #6c757d;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0;
  padding: 0;
}
.page-header .breadcrumb a {
  color: #333;
}
.page-title {
  color: #333;
  margin-bottom: 5px;
}
/*-----------------
	10. Appointments
-----------------------*/

.list-links {
  display: flex;
  display: -ms-flexbox;
  flex-wrap: wrap;
  padding: 0;
}
.list-links li {
  margin: 0 15px 10px 0;
}
.list-links li a {
  background: #f5f6fa;
  border-radius: 5px;
  padding: 10px 12px;
  font-size: 16px;
  color: #131523;
  border: 1px solid #f5f6fa;
  display: inline-block;
}
.list-links li a:hover {
  background: #e5e5e8;
}
.list-links li a span {
  font-size: 14px;
}
.list-links li.active a {
  background: #ffffff;
  border: 1px solid #0ce0ff;
  color: #1b5a90;
}
.bookingrange.btn-white {
  padding: 0;
  border-radius: 6px;
  display: flex;
  align-items: center;
  line-height: 44px;
  color: #131523;
}
.bookingrange .cal-ico {
  padding: 0 10px;
}
.ico i {
  padding: 15px 8px;
  color: #131523;
}
.ico i:first-child {
  border-left: 1px solid #e6e9f4;
  border-right: 1px solid #e6e9f4;
}
.daterangepicker .ranges li {
  margin: 10px;
  border: 1px solid #eef1fe;
  border-radius: 6px;
}
.daterangepicker .ranges li.active {
  border: 1px solid #0ce0ff;
  background: #fff;
  color: #1b5a90;
}
.daterangepicker.show-calendar .ranges {
  background: #f5f6fa;
  margin: 0;
}
.daterangepicker.show-ranges.ltr .drp-calendar.left {
  border-left: 0;
}
.daterangepicker td.active,
.daterangepicker td.active:hover {
  background-color: #0ce0ff;
}
.daterangepicker td.in-range {
  background-color: #0ce0ff;
  color: #fff;
}
.daterangepicker:before {
  border-bottom: 7px solid #e6e9f4;
}
.daterangepicker.opensright:before {
  right: 9px;
  left: auto;
}
.daterangepicker:after {
  content: none;
}
.daterangepicker .drp-buttons .btn {
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 50px;
}
.daterangepicker .drp-selected {
  display: none;
}
.multipleSelection .selectBox,
.SortBy .selectBoxes {
  position: relative;
  background: #fff;
  width: 100%;
  padding: 6px 10px;
  font-weight: 400;
  border: 1px solid #e6e9f4;
  border-radius: 7px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.selectBoxes.order-by {
  min-width: 154px;
  background: #eef1fe;
  padding: 6px 10px;
}
.multipleSelection {
  min-width: 123px;
  position: relative;
}
.multi-filter,
.SortBy {
  position: relative;
}
.multi-filter:before {
  border: 7px solid #fff;
  border-color: transparent transparent #fff #fff;
  box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
  content: "";
  right: 0;
  position: absolute;
  top: 2px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.multipleSelection #checkBoxes,
.SortBy #checkBox {
  display: none;
  position: absolute;
  width: 220px;
  right: 0;
  z-index: 1;
  background: #ffffff;
  border: 1px solid #e6e9f4;
  box-shadow: 0px 4px 4px rgba(201, 201, 201, 0.25);
  margin-top: 8px;
  padding: 15px;
  border-radius: 4px;
}
.multipleSelection #checkBoxes::before,
.SortBy #checkBox::before {
  border: 5px solid #fff;
  border-color: transparent transparent #ededed #ededed;
  box-shadow: -2px 2px 2px -1px rgb(0 0 0 / 10%);
  content: "";
  right: 0;
  position: absolute;
  top: 0;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
}
.check-list {
  position: relative;
}
.form-custom {
  position: relative;
}
.form-custom i {
  position: absolute;
  top: 10px;
  left: 10px;
  color: #7e84a3;
}
#checkBoxes .form-custom {
  margin-bottom: 10px;
}
.card-header .form-custom .form-control {
  padding-left: 30px;
  height: 35px;
}
#checkBoxes .form-custom .form-control {
  padding-left: 25px;
}
.multipleSelection #checkBoxes.form-custom .form-control {
  padding-left: 25px;
  background: #f5f6fa;
  border: 1px solid #e6e9f4;
  border-radius: 5px;
  height: 33px;
}
.multipleSelection #checkBoxes .form-custom i {
  position: absolute;
  top: 35%;
  left: 6px;
  color: #7e84a3;
  font-size: 12px;
}
#checkBoxes .btn,
#checkBox .btn {
  font-size: 14px;
  font-weight: 600;
  padding: 0.27rem 0.75rem;
}
.lab-title {
  font-size: 12px;
  color: #1b5a90;
}
.spl-img {
  width: 43px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #eef1fe;
  box-shadow: 0px 5px 7px #eef1fe;
  border-radius: 5px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 5px;
}
.spl-img img {
  margin: 0 !important;
}
.bg-grey {
  background: #f5f6fa !important;
}
.custom_check {
  color: #131523 !important;
  display: inline-block;
  position: relative;
  font-size: 14px !important;
  margin-bottom: 15px;
  padding-left: 25px;
  cursor: pointer;
  font-weight: 400 !important;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  line-height: 18px;
  font-family: "Noto Sans", sans-serif;
}
.custom_check input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.custom_check input:checked ~ .checkmark {
  background-color: #1b5a90;
  border-color: #1b5a90;
}
.custom_check .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  border: 1px solid #1b5a90;
  background-color: #fff;
  border-radius: 3px;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -webkit-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.custom_check .checkmark::after {
  content: "\e92b";
  font-family: "feather" !important;
  font-weight: 900;
  position: absolute;
  display: none;
  left: 2px;
  top: -2px;
  color: #ffffff;
  font-size: 9px;
}
.custom_check input:checked ~ .checkmark:after {
  display: block;
}
.custom_radio {
  display: block;
  position: relative;
  padding-left: 27px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.custom_radio input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.custom_radio .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  margin: 1px 0 0 0;
  border: 2px solid #eef1fe;
  border-top-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.custom_radio .checkmark::after {
  position: absolute;
  left: 3px;
  top: 3px;
  content: "";
  width: 10px;
  height: 10px;
  background-color: #1b5a90;
  opacity: 0;
  visibility: hidden;
  -webkit-transform: scale(0.1);
  -moz-transform: scale(0.1);
  -ms-transform: scale(0.1);
  -o-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
}
.custom_radio input:checked ~ .checkmark::after {
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}
.pos-top {
  position: absolute;
  top: 19px;
  right: 15px;
}
.rating-wrapper h5 {
  font-size: 14px;
  margin-bottom: 8px;
}
.ratings i {
  color: #ffbc00;
}
.ratings i.filled {
  font-weight: 600;
}
.hover-table > tbody > tr:hover {
  background: #ffffff;
  box-shadow: 0px 0px 24px #eef1fe;
}
.table thead tr th:first-child,
.table thead tr td:first-child {
  padding-left: 15px;
}
.table thead tr th:last-child,
.table thead tr td:last-child {
  padding-right: 15px;
}
.pagination-tab .page-item {
  padding: 0 5px;
}
.pagination-tab .page-link {
  border: none;
  background: #ffffff;
  border: 1px solid #f8f8f8;
  border-radius: 4px;
  box-shadow: 0px 4px 7px rgba(185, 185, 185, 0.25);
  width: 32px;
  height: 32px;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
}
.pagination-tab .page-item.disabled .page-link,
.pagination-tab .page-item:last-child .page-link {
  width: unset;
  height: unset;
  box-shadow: none;
  color: #1b5a90;
  font-size: 14px;
  border: 0;
}
.pagination-tab .page-item.disabled .page-link {
  padding-left: 0;
}
.pagination-tab .page-item:last-child .page-link {
  padding-right: 0;
}
.pagination-tab .page-item.disabled .page-link i,
.pagination-tab .page-item:last-child .page-link i {
  font-size: 18px;
}
.pagination-tab .page-item.active .page-link {
  background: #f4f6ff;
  border: 1px solid #e6e9f4;
  color: #1b5a90;
}
.doc-badge {
  display: flex;
  display: -ms-flexbox;
  align-items: center;
}
.doc-badge span {
  width: 25px;
  height: 15px;
  font-weight: 600;
  background: #f0142f;
  border-radius: 2px;
  color: #fff;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
}
.modal.contentmodal .modal-content h3 {
  font-size: 24px;
}
.modal.contentmodal .modal-content .duration-select ul li {
  font-size: 14px;
  color: #433489;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  justify-content: center;
}
.modal.contentmodal .modal-content .duration-select ul.audio-set li {
  width: 50%;
  margin-bottom: 0;
}
.modal.contentmodal .modal-content .duration-select ul li i {
  font-size: 16px;
}
.modal.contentmodal .modal-content .feedback-content p {
  font-size: 14px;
  font-family: "Noto Sans", sans-serif;
}
.modal.contentmodal .modal-content .feedback-content p span {
  font-weight: 600;
}
.modal.contentmodal .modal-content .feedback-content .review-count i {
  font-size: 20px;
  color: #ffbc00;
  margin-right: 5px;
}
.modal.contentmodal .modal-content .feedback-content .form-group textarea {
  font-size: 12px;
  resize: none;
  min-height: 90px;
  font-family: "Noto Sans", sans-serif;
}
.modal.contentmodal .modal-content .submit-section .btn {
  padding: 7px 12px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  min-width: 150px;
  margin-top: 5px;
}
.modal.contentmodal .modal-content .submit-section p a {
  font-size: 14px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
}
.modal.contentmodal .media {
  background-color: #fff;
  border: 1px solid #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 35px;
}
.modal.contentmodal .media h3 {
  font-size: 18px;
}
.modal.contentmodal .media p {
  color: #7e84a3;
}
.modal.contentmodal .media img {
  width: 74px;
  height: 74px;
  margin-right: 20px;
  border-radius: 5px;
  object-fit: cover;
}
.modal.contentmodal .member-wrapper h5 {
  font-size: 14px;
  border-bottom: 1px solid #e6e9f4;
  margin-bottom: 15px;
  padding-bottom: 10px;
}
.modal.contentmodal .mem-info h6 {
  font-size: 14px;
  margin-bottom: 7px;
}
.modal.contentmodal .mem-info p {
  font-size: 16px;
  margin-bottom: 25px;
  color: #7e84a3;
}
.modal.contentmodal .lang-wrap p {
  font-size: 16px;
  margin-bottom: 20px;
}
.modal.contentmodal .lang-wrap p span {
  color: #1b5a90;
}
.modal.contentmodal .media-body .ratings p {
  font-weight: 600;
  background: #f2b200;
  border-radius: 4px;
  padding: 5px;
  color: #fff;
}
.modal.contentmodal .media-body .ratings p i {
  color: #fff;
  font-size: 10px;
  margin-right: 3px;
}
.modal-content .close-btn {
  background: transparent;
  border: none;
  padding: 0;
}
.modal-content .close-btn i {
  font-size: 20px;
  color: #f0142f;
}
.btn-file {
  align-items: center;
  display: inline-flex;
  font-size: 20px;
  justify-content: center;
  overflow: hidden;
  padding: 0 0.75rem;
  position: relative;
  vertical-align: middle;
}
.btn-file input {
  cursor: pointer;
  filter: alpha(opacity=0);
  font-size: 23px;
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

/*-----------------
	24. Profile
-----------------------*/

.cal-icon {
  position: relative;
  width: 100%;
}
.cal-icon:after {
  color: #979797;
  content: "\f073";
  display: block;
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  font-size: 15px;
  margin: auto;
  position: absolute;
  right: 15px;
  top: 10px;
}
.profile-cover {
  position: relative;
  padding: 1.75rem 2rem;
  border-radius: 0.75rem;
  height: 10rem;
}
.profile-cover-wrap {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 10rem;
  background-color: #e7eaf3;
  border-radius: 0.75rem;
}
.profile-cover-img {
  width: 100%;
  height: 10rem;
  -o-object-fit: cover;
  object-fit: cover;
  vertical-align: top;
  border-radius: 0.75rem;
}
.cover-content {
  position: relative;
  z-index: 1;
  padding: 1rem 2rem;
  position: absolute;
  bottom: 0;
  right: 0;
}
.custom-file-btn {
  position: relative;
  overflow: hidden;
}
.custom-file-btn-input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  opacity: 0;
}
hr {
  background-color: #eef1fe;
  opacity: 1;
}
.profile-cover-avatar {
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  width: 93px;
  height: 93px;
}
.profile-cover-avatar input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(19, 33, 68, 0.25);
  border-radius: 50%;
  transition: 0.2s;
}
.avatar-edit {
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  color: #fff;
  background: #0ce0ff;
  border-radius: 50%;
  transition: 0.2s;
}
.avatar-edit svg {
  width: 18px;
}
/* .card-table
  div.table-responsive
  > div.dataTables_wrapper
  > div.row:first-child {
  padding: 1.5rem 1.5rem 0;
}
.card-table div.table-responsive > div.dataTables_wrapper > div.row:last-child {
  padding: 0 1.5rem 1.5rem;
} */

table.dataTable thead .sorting:before,
table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:before,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:before,
table.dataTable thead .sorting_desc:after,
table.dataTable thead .sorting_asc_disabled:before,
table.dataTable thead .sorting_asc_disabled:after,
table.dataTable thead .sorting_desc_disabled:before,
table.dataTable thead .sorting_desc_disabled:after {
  bottom: 9px;
}
#filter_inputs {
  display: none;
}
.input-label {
  display: block;
  color: #1e2022;
  font-size: 0.875rem;
}
.submit-section {
  text-align: center;
  margin-top: 25px;
}
.submit-btn {
  border-radius: 5px;
  font-size: 16px;
  font-weight: 600;
  min-width: 146px;
  padding: 6px 20px;
}
.card-body-height {
  height: 28rem;
  overflow: hidden;
  overflow-y: auto;
}
.profile-cover-avatar .avatar-img {
  display: block;
  max-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  pointer-events: none;
  border-radius: 3px;
}
.avatar-img {
  display: block;
  max-width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  pointer-events: none;
  border-radius: 3px;
}
.profile-info h4 {
  font-size: 19px;
  font-weight: 400;
  margin-bottom: 30px;
}
.address h5 {
  font-size: 15px;
  font-weight: normal;
}
.address p {
  font-size: 14px;
  color: var(--theme-box-shadow-extra-heavy);
}
.profile-list {
  background: #ffffff;
  box-shadow: 0px 14px 34px rgba(249, 249, 249, 0.25);
  border-radius: 4px;
  padding: 20px;
}
.pro-title {
  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid #eef1fe;
}
a.edit-pro {
  font-size: 16px;
  color: #0ce0ff;
}
.profile-list h6 {
  font-weight: 400;
}
.profile-list p {
  color: #7e84a3;
  margin-bottom: 10px;
}
.profile-list h5 {
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 10px;
}
.profile-detail {
  display: flex;
  display: -ms-flexbox;
  align-items: center;
  margin-bottom: 25px;
}
.profile-detail .pro-name {
  padding-left: 20px;
}
.profile-detail .pro-name p {
  margin-bottom: 5px;
}
.profile-detail .pro-name h4,
.profile-detail .profile-cover-avatar {
  margin-bottom: 5px;
}
.profile-detail .edit-pro {
  margin-left: auto;
}
.social-icon {
  list-style: none;
  padding: 0;
  margin: 0;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
}
.social-icon li {
  display: inline-block;
  padding-right: 10px;
}
.social-icon li a {
  background: #ffffff;
  border: 1px solid #0ce0ff;
  border-radius: 6px;
  width: 32px;
  height: 32px;
  justify-content: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  color: #1b5a90;
  margin: 0;
  font-size: 14px;
  transition: all 0.4s ease 0s;
}
.social-icon li a:hover {
  color: #1b5a90;
  opacity: 0.8;
  transition: all 0.4s ease 0s;
}
/*-----------------
	11. Login
-----------------------*/

.login-bg {
  background-image: url("https://doccure-laravel.dreamguystech.com/template/public/assets_admin/img/login-bg.jpg");
  background-size: cover;
  top: 0;
  left: 0;
  position: fixed;
}
.login-banner {
  min-height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 30px 15px;
}
.login-wrap-bg {
  padding: 0;
  position: absolute;
  right: 0;
}
.login-wrapper {
  width: 100%;
  height: 100vh;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  justify-content: center;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}
.login-wrapper .loginbox {
  width: 100%;
  padding: 40px;
  max-width: 530px;
}
.login-wrapper .loginbox .img-logo {
  margin-bottom: 28px;
}
.login-wrapper .loginbox h3 {
  font-size: 28px;
  margin-bottom: 15px;
}
.account-subtitle {
  color: #7e84a3;
  font-size: 16px;
  margin-bottom: 30px;
}
.login-wrapper .loginbox label {
  margin-bottom: 16px;
  width: 100%;
}
.forgot-link {
  color: #0ce0ff;
  float: right;
}
.login-wrapper .loginbox .dont-have {
  font-size: small;
  margin: 25px 0 0;
  text-align: center;
}
.login-wrapper .loginbox .dont-have a {
  color: #0ce0ff;
}
.login-wrapper .loginbox .dont-have a:hover {
  /* text-decoration: underline; */
}
.social-login {
  display: flex;
  display: -ms-flexbox;
  justify-content: center;
}
.social-login > a {
  background-color: #fff;
  border: 2px solid #e6e9f4;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 98px;
  height: 51px;
  margin-right: 30px;
}
.social-login > a:last-child {
  margin-right: 0;
}
.social-login > a:hover {
  opacity: 0.8;
  background: #e1f6ff;
}
.login-or {
  margin: 30px 0;
  text-align: center;
}
.login-or {
  color: #757575;
  margin: 17px 0 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  position: relative;
}
.or-line {
  background-color: #e5e5e5;
  height: 1px;
  margin-bottom: 0;
  margin-top: 0;
  display: block;
}
.span-or {
  background-color: #fff;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  text-align: center;
  top: -3px;
  font-size: 16px;
  padding: 0 15px;
  color: #7e84a3;
}
.email-confirm {
  text-align: center;
}
.loginbox.email-confirm h3 {
  margin-bottom: 30px;
}
.loginbox.email-confirm p {
  margin-bottom: 30px;
}
.email-confirm .success-icon {
  margin-bottom: 20px;
}
.email-confirm .success-icon i {
  font-size: 69px;
  color: #17d053;
}
.email-confirm .btn {
  min-width: 200px;
}

/*-----------------
	12. Lock Screen
-----------------------*/

.lock-user {
  margin-bottom: 20px;
  text-align: center;
}
.lock-user img {
  margin-bottom: 15px;
  width: 100px;
}

/*-----------------
	13. Notifications
-----------------------*/
.dark_mode {
  border: 1px solid #afe0fc;
  border-radius: 3px;
  margin-right: 0.5rem;
  padding: 1px;
}

.notifications {
  padding: 0;
  border: 1px solid #eef1fe;
  box-shadow: 0px 4px 4px #eef1fe;
  border-radius: 10px !important;
}
.media-body {
  width: 25rem;
}
.media-body h6 {
  color: #000;
  margin-bottom: 3px;
  margin-left: 0.5rem;
}
.notification-time {
  font-size: 12px;
  line-height: 1.35;
  float: right;
}
.notifications .media {
  margin-top: 0;
  border-bottom: 1px solid #f5f5f5;
}
.notifications .media:last-child {
  border-bottom: none;
}
.notifications .media a {
  display: block;
  padding: 10px 15px;
  border-radius: 2px;
}
.notifications .media a:hover {
  background-color: #fafafa;
}
.notifications .media > .avatar {
  margin-right: 10px;
  width: auto;
  height: auto;
}
.notifications .media > .avatar > img {
  width: 46px;
  height: 46px;
  border-radius: 5px;
  margin-right: 8px;
}
.notifications .media-list .media-left {
  padding-right: 8px;
}
.main-drop .dropdown-menu {
  min-width: 163px;
  border: 1px solid #eef1fe;
  box-shadow: 0px 4px 4px #eef1fe;
  border-radius: 5px;
  transform: translate(0px, 45px) !important;
}
.topnav-dropdown-header {
  border-bottom: 1px solid #eef1fe;
  text-align: center;
}
.topnav-dropdown-header,
.topnav-dropdown-footer {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  padding-right: 15px;
}
.topnav-dropdown-footer {
  border-top: 1px solid #eee;
}
.topnav-dropdown-footer a {
  display: block;
  text-align: center;
  color: #333;
}
.display-none {
  display: none;
}
.user-menu.nav > a.badge {
  background-color: #ef3737;
  display: block;
  font-size: 10px;
  font-weight: bold;
  height: 5px;
  width: 5px;
  padding: 0;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 20px;
  border-radius: 50%;
}
.user-menu.nav > li > a > i {
  font-size: 15px;
  line-height: 60px;
}
.user-menu.nav > li > a > svg {
  font-size: 1.5rem;
  line-height: 60px;
}
.noti-details {
  color: #7e84a3;
  margin-bottom: 0;
  margin-left: 0.5rem;
}
.noti-title {
  color: #0ce0ff;
}
.notifications .noti-content {
  height: 260px;
  width: 420px;
  overflow-y: auto;
  position: relative;
}
.notification-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.notifications ul.notification-list > li {
  margin-top: 0;
  border-bottom: 1px solid #f5f5f5;
}
.notifications ul.notification-list > li:last-child {
  border-bottom: none;
}
.notifications ul.notification-list > li a {
  display: block;
  padding: 10px 15px;
  border-radius: 2px;
}
.notifications ul.notification-list > li a:hover {
  background-color: #fafafa;
}
.notifications ul.notification-list > li .list-item {
  border: 0;
  padding: 0;
  position: relative;
}
.topnav-dropdown-header .notification-title {
  color: #333;
  display: block;
  float: left;
  font-size: 16px;
  font-weight: 600;
}
.topnav-dropdown-header .clear-noti {
  color: #131523;
  float: right;
  font-size: 12px;
  text-transform: uppercase;
}
.noti-time {
  margin: 0;
}

/*-----------------
	14. Dashboard
-----------------------*/

.dash-widget-icon {
  align-items: center;
  display: inline-flex;
  font-size: 1.875rem;
  height: 50px;
  justify-content: center;
  line-height: 48px;
  text-align: center;
  width: 50px;
  border: 3px solid;
  border-radius: 50px;
  padding: 28px;
}
.dash-count {
  font-size: 18px;
  margin-left: auto;
}
.dash-widget-info h3 {
  margin-bottom: 10px;
}
.dash-widget-header {
  align-items: center;
  display: flex;
  margin-bottom: 15px;
}
.card-chart .card-body {
  padding: 8px;
}
#morrisArea > svg,
#morrisLine > svg {
  width: 100%;
}
.activity-feed {
  list-style: none;
  margin-bottom: 0;
  margin-left: 5px;
  padding: 0;
}
.activity-feed .feed-item {
  border-left: 2px solid #e4e8eb;
  padding-bottom: 19px;
  padding-left: 20px;
  position: relative;
}
.activity-feed .feed-item:last-child {
  border-color: transparent;
  padding-bottom: 0;
}
.activity-feed .feed-item:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: -7px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #177dff;
}
.activity-feed .feed-item .feed-date {
  display: block;
  position: relative;
  color: #777;
  text-transform: uppercase;
  font-size: 13px;
}
.activity-feed .feed-item .feed-text {
  color: #777;
  position: relative;
}
.activity-feed .feed-item .feed-text a {
  color: #333;
  font-weight: 600;
}

/*-----------------
	15. Invoice
-----------------------*/

.add-btn {
  border: 1px solid transparent;
  border-radius: 20px;
  color: #666;
  display: inline-block;
  padding: 0.375rem 0.75rem;
}
.add-btn:hover,
.add-btn:active,
.add-btn:focus {
  background-color: #fff;
  border-color: #ddd;
  color: #666;
}
.add-btn span {
  align-items: center;
  background-color: #ffc107;
  border-radius: 50%;
  color: #fff;
  display: inline-flex;
  font-size: 14px;
  height: 22px;
  justify-content: center;
  margin-right: 3px;
  width: 22px;
}
.invoice-details h4 {
  color: #666;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 1.875rem;
  text-transform: uppercase;
}
.inv-badge {
  color: #fff;
  display: inline-flex;
  font-size: 11px;
  justify-content: center;
  min-width: 80px;
}
.inv-logo {
  max-height: 80px;
}
.invoice-container {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  margin: 0 auto 1.875rem;
  max-width: 900px;
  padding: 1.5rem;
}
.invoice-details,
.invoice-payment-details > li span {
  float: left;
  text-align: left;
}
.inv-logo {
  height: auto;
  max-height: 100px;
  width: auto;
}

/*-----------------
	16. Calendar
-----------------------*/

.calendar-events {
  border: 1px solid transparent;
  cursor: move;
  padding: 10px 15px;
}
.calendar-events:hover {
  border-color: #e9e9e9;
  background-color: #fff;
}
.calendar-events i {
  margin-right: 8px;
}
.calendar {
  float: left;
  margin-bottom: 0;
}
.fc-toolbar.fc-header-toolbar {
  margin-bottom: 1.5rem;
}
.none-border .modal-footer {
  border-top: none;
}
.fc-toolbar h2 {
  font-size: 18px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  line-height: 30px;
  text-transform: uppercase;
}
.fc-day-grid-event .fc-time {
  font-family: "Roboto", sans-serif;
}
.fc-day {
  background: #fff;
}
.fc-toolbar .fc-state-active,
.fc-toolbar .ui-state-active,
.fc-toolbar button:focus,
.fc-toolbar button:hover,
.fc-toolbar .ui-state-hover {
  z-index: 0;
}
.fc th.fc-widget-header {
  background: #eeeeee;
  font-size: 14px;
  line-height: 20px;
  padding: 10px 0;
  text-transform: uppercase;
}
.fc-unthemed th,
.fc-unthemed td,
.fc-unthemed thead,
.fc-unthemed tbody,
.fc-unthemed .fc-divider,
.fc-unthemed .fc-row,
.fc-unthemed .fc-popover {
  border-color: #f3f3f3;
}
.fc-basic-view .fc-day-number,
.fc-basic-view .fc-week-number {
  padding: 2px 5px;
}
.fc-button {
  background: #f1f1f1;
  border: none;
  color: #797979;
  text-transform: capitalize;
  box-shadow: none !important;
  border-radius: 3px !important;
  margin: 0 3px !important;
  padding: 6px 12px !important;
  height: auto !important;
}
.fc-text-arrow {
  font-family: inherit;
  font-size: 16px;
}
.fc-state-hover {
  background: #f3f3f3;
}
.fc-state-highlight {
  background: #f0f0f0;
}
.fc-state-down,
.fc-state-active,
.fc-state-disabled {
  background-color: #00d0f1 !important;
  color: #fff !important;
  text-shadow: none !important;
}
.fc-cell-overlay {
  background: #f0f0f0;
}
.fc-unthemed .fc-today {
  background: #fff;
}
.fc-event {
  border-radius: 2px;
  border: none;
  color: #fff !important;
  cursor: move;
  font-size: 13px;
  margin: 1px 7px;
  padding: 5px 5px;
  text-align: center;
}
.fc-basic-view td.fc-week-number span {
  padding-right: 8px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
}
.fc-basic-view td.fc-day-number {
  padding-right: 8px;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
}
.event-form .input-group .form-control {
  height: 40px;
}
.submit-section {
  text-align: center;
  margin-top: 40px;
}
.submit-btn {
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  min-width: 200px;
  padding: 10px 20px;
}

/*-----------------
	17. Inbox
-----------------------*/

.dropdown-action {
  margin-bottom: 5px;
}
.dropdown-action .dropdown-toggle:after {
  display: none;
}
.table-inbox input[type="radio"],
.table-inbox input[type="checkbox"] {
  cursor: pointer;
}
.mail-list {
  list-style: none;
  padding: 0;
}
.mail-list > li > a {
  color: #333;
  display: block;
  padding: 10px;
}
.mail-list > li.active > a {
  color: #00d0f1;
  font-weight: bold;
}
.unread .name,
.unread .subject,
.unread .mail-date {
  color: #000;
  font-weight: 600;
}
.table-inbox .fa-star {
  color: #ffd200;
}
.table-inbox .starred.fa-star {
  color: #ffd200;
}
.table.table-inbox > tbody > tr > td,
.table.table-inbox > tbody > tr > th,
.table.table-inbox > tfoot > tr > td,
.table.table-inbox > tfoot > tr > th,
.table.table-inbox > thead > tr > td,
.table.table-inbox > thead > tr > th {
  border-bottom: 1px solid #f2f2f2;
  border-top: 0;
}
.table-inbox {
  font-size: 15px;
  margin-bottom: 0;
}
.table.table-inbox thead {
  background-color: #fff;
}
.note-editor.note-frame {
  border: 1px solid #ddd;
  box-shadow: inherit;
}
.note-editor.note-frame .note-statusbar {
  background-color: #fff;
}
.note-editor.note-frame.fullscreen {
  top: 60px;
}
.note-editor.note-frame .btn-light {
  background-color: #f9f9f9;
  box-shadow: unset;
  color: #333;
}
.mail-title {
  font-weight: bold;
  text-transform: uppercase;
}
.form-control.search-message {
  border-color: #ccc;
  border-radius: 4px;
  height: 38px;
  width: 180px;
}
.table-inbox tr {
  cursor: pointer;
}
table.table-inbox tbody tr.checked {
  background-color: #ffffcc;
}
.mail-label {
  font-size: 16px !important;
  margin-right: 5px;
}

/*-----------------
	18. Mail View
-----------------------*/

.attachments {
  list-style: none;
  margin: 0;
  padding: 0;
}
.attachments li {
  border: 1px solid #eee;
  float: left;
  margin-bottom: 10px;
  margin-right: 10px;
  width: 180px;
}
.attach-info {
  background-color: #f4f4f4;
  padding: 10px;
}
.attach-file {
  color: #777;
  font-size: 70px;
  padding: 10px;
  min-height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.attach-file img {
  height: auto;
  max-width: 100%;
}
.mailview-header {
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.mailview-footer {
  border-top: 1px solid #ddd;
  margin-top: 20px;
  padding-top: 15px;
}
.mailview-footer .btn-white {
  margin-top: 10px;
  min-width: 102px;
}
.sender-img {
  float: left;
  margin-right: 10px;
  width: 40px;
}
.sender-name {
  display: block;
}
.receiver-name {
  color: #777;
}
.right-action {
  text-align: right;
}
.mail-view-title {
  font-weight: 500;
  font-size: 24px;
  margin: 0;
}
.mail-view-action {
  float: right;
}
.mail-sent-time {
  float: right;
}
.inbox-menu {
  display: inline-block;
  margin: 0 0 1.875rem;
  padding: 0;
  width: 100%;
}
.inbox-menu li {
  display: inline-block;
  width: 100%;
}
.inbox-menu li + li {
  margin-top: 2px;
}
.inbox-menu li a {
  color: #333;
  display: inline-block;
  padding: 10px 15px;
  width: 100%;
  text-transform: capitalize;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  transition: 0.3s ease;
}
.inbox-menu li a i {
  font-size: 16px;
  padding-right: 10px;
  color: #878787;
}
.inbox-menu li a:hover,
.inbox-menu li.active a,
.inbox-menu li a:focus {
  background: rgba(33, 33, 33, 0.05);
}
.compose-btn {
  margin-bottom: 1.875rem;
}
.compose-btn a {
  font-weight: 600;
  padding: 8px 15px;
}

/*-----------------
	19. Error
-----------------------*/

.error-page {
  align-items: center;
  color: #1f1f1f;
  display: flex;
}
.error-page .main-wrapper {
  display: flex;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  width: 100%;
  min-height: unset;
}
.error-box {
  margin: 0 auto;
  max-width: 480px;
  padding: 1.875rem 0;
  text-align: center;
  width: 100%;
}
.error-box h1 {
  color: #00d0f1;
  font-size: 10em;
}
.error-box p {
  margin-bottom: 1.875rem;
}
.error-box .btn {
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  min-width: 200px;
  padding: 10px 20px;
}
/*-----------------
	20. Focus Label
-----------------------*/

.form-focus {
  min-height: 51px;
  position: relative;
}
.form-focus .focus-label {
  font-size: 14px;
  font-weight: 400;
  pointer-events: none;
  position: absolute;
  -webkit-transform: translate3d(0, 22px, 0) scale(1);
  -ms-transform: translate3d(0, 22px, 0) scale(1);
  -o-transform: translate3d(0, 22px, 0) scale(1);
  transform: translate3d(0, 22px, 0) scale(1);
  transform-origin: left top;
  transition: 240ms;
  left: 12px;
  top: -8px;
  z-index: 1;
  color: #131523;
  margin-bottom: 0;
}
.form-focus.focused .focus-label {
  opacity: 1;
  top: -18px;
  font-size: 12px;
  z-index: 1;
}
.form-focus.focused .form-control {
  background: #ffffff;
}
.form-focus .form-control:focus ~ .focus-label,
.form-focus .form-control:-webkit-autofill ~ .focus-label {
  opacity: 1;
  font-weight: 400;
  top: -18px;
  font-size: 12px;
  z-index: 1;
}
.form-focus .form-control {
  height: 51px;
  padding: 21px 12px 6px;

  background-color: var(--theme-body-background-medium);
  border: 1px solid var(--theme-overlay-invert);
  color: var(--theme-box-shadow-extra-heavy);
}

.form-focus .form-control::-webkit-input-placeholder {
  color: transparent;
  transition: 240ms;
}
.form-focus .form-control:focus::-webkit-input-placeholder {
  transition: none;
}
.form-focus.focused .form-control::-webkit-input-placeholder {
  color: #131523;
}
.form-focus.select-focus .focus-label {
  opacity: 1;
  font-weight: 300;
  top: -20px;
  font-size: 12px;
  z-index: 1;
}
.form-focus .select2-container .select2-selection--single {
  border: 1px solid #e6e9f4;
  background: #f5f6fa;
  height: 51px;
}
.form-focus
  .select2-container--default
  .select2-selection--single
  .select2-selection__arrow {
  height: 48px;
  right: 7px;
}
.form-focus
  .select2-container--default
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #131523;
  border-style: solid;
  border-width: 0 2px 2px 0;
  height: 0;
  left: 50%;
  margin-left: -10px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
}
.form-focus
  .select2-container--default.select2-container--open
  .select2-selection--single
  .select2-selection__arrow
  b {
  border-color: #131523;
  border-width: 2px 0 0 2px;
  padding: 3px;
}
.form-focus
  .select2-container
  .select2-selection--single
  .select2-selection__rendered {
  padding-right: 30px;
  padding-left: 12px;
  padding-top: 5px;
}
.form-focus
  .select2-container--default
  .select2-selection--single
  .select2-selection__rendered {
  color: #131523;
  font-size: 14px;
  font-weight: normal;
  line-height: 38px;
}
.form-focus
  .select2-container--default
  .select2-results__option--highlighted[aria-selected] {
  background-color: #eef1fe;
}
.submit-sec {
  text-align: right;
  padding-top: 20px;
}
.submit-sec .btn {
  min-width: 146px;
  margin-bottom: 10px;
}
.submit-sec .btn + .btn {
  margin-left: 10px;
}
/*-----------------
	20. Chat
-----------------------*/

.chat-window {
  border: 1px solid #e0e3e4;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-bottom: 1.875rem;
}
.chat-window .chat-cont-left {
  border-right: 1px solid #e0e3e4;
  flex: 0 0 35%;
  left: 0;
  max-width: 35%;
  position: relative;
  z-index: 4;
}
.chat-window .chat-cont-left .chat-header {
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e3e4;
  color: #324148;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 0 15px;
}
.chat-window .chat-cont-left .chat-header span {
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
}
.chat-window .chat-cont-left .chat-header .chat-compose {
  color: #8a8a8a;
  display: inline-flex;
}
.chat-window .chat-cont-left .chat-search {
  background-color: #f5f5f6;
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 15px;
  width: 100%;
}
.chat-window .chat-cont-left .chat-search .input-group {
  width: 100%;
}
.chat-window .chat-cont-left .chat-search .input-group .form-control {
  background-color: #fff;
  border-radius: 50px;
  padding-left: 36px;
}
.chat-window .chat-cont-left .chat-search .input-group .form-control:focus {
  border-color: #ccc;
  box-shadow: none;
}
.chat-window .chat-cont-left .chat-search .input-group .input-group-prepend {
  align-items: center;
  bottom: 0;
  color: #666;
  display: flex;
  left: 15px;
  pointer-events: none;
  position: absolute;
  top: 0;
  z-index: 4;
}
.chat-window .chat-scroll {
  max-height: calc(100vh - 255px);
  overflow-y: auto;
}
.chat-window .chat-cont-left .chat-users-list {
  background-color: #fff;
}
.chat-window .chat-cont-left .chat-users-list a.media {
  border-bottom: 1px solid #e5e5e5;
  padding: 10px 15px;
  transition: all 0.2s ease 0s;
}
.chat-window .chat-cont-left .chat-users-list a.media:last-child {
  border-bottom: 0;
}
.chat-window .chat-cont-left .chat-users-list a.media .media-img-wrap {
  margin-right: 15px;
  position: relative;
}
.chat-window .chat-cont-left .chat-users-list a.media .media-img-wrap .avatar {
  height: 45px;
  width: 45px;
}
.chat-window .chat-cont-left .chat-users-list a.media .media-img-wrap .status {
  bottom: 7px;
  height: 10px;
  right: 4px;
  position: absolute;
  width: 10px;
  border: 2px solid #fff;
}
.chat-window .chat-cont-left .chat-users-list a.media .media-body {
  display: flex;
  justify-content: space-between;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:first-child
  .user-name,
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:first-child
  .user-last-chat {
  max-width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:first-child
  .user-name {
  color: #333;
  text-transform: capitalize;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:first-child
  .user-last-chat {
  color: #8a8a8a;
  font-size: 14px;
  line-height: 24px;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:last-child {
  text-align: right;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media
  .media-body
  > div:last-child
  .last-chat-time {
  color: #8a8a8a;
  font-size: 13px;
}
.chat-window .chat-cont-left .chat-users-list a.media:hover {
  background-color: #f5f5f6;
}
.chat-window
  .chat-cont-left
  .chat-users-list
  a.media.read-chat
  .media-body
  > div:last-child
  .last-chat-time {
  color: #8a8a8a;
}
.chat-window .chat-cont-left .chat-users-list a.media.active {
  background-color: #f5f5f6;
}
.chat-window .chat-cont-right {
  flex: 0 0 65%;
  max-width: 65%;
}
.chat-window .chat-cont-right .chat-header {
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid #e0e3e4;
  display: flex;
  height: 72px;
  justify-content: space-between;
  padding: 0 15px;
}
.chat-window .chat-cont-right .chat-header .back-user-list {
  display: none;
  margin-right: 5px;
  margin-left: -7px;
}
.chat-window .chat-cont-right .chat-header .media {
  align-items: center;
}
.chat-window .chat-cont-right .chat-header .media .media-img-wrap {
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 15px;
}
.chat-window .chat-cont-right .chat-header .media .media-img-wrap .avatar {
  height: 50px;
  width: 50px;
}
.chat-window .chat-cont-right .chat-header .media .media-img-wrap .status {
  border: 2px solid #fff;
  bottom: 0;
  height: 10px;
  position: absolute;
  right: 3px;
  width: 10px;
}
.chat-window .chat-cont-right .chat-header .media .media-body .user-name {
  color: #333;
  font-size: 16px;
  font-weight: 600;
  text-transform: capitalize;
}
.chat-window .chat-cont-right .chat-header .media .media-body .user-status {
  color: #666;
  font-size: 14px;
}
.chat-window .chat-cont-right .chat-header .chat-options {
  display: flex;
}
.chat-window .chat-cont-right .chat-header .chat-options > a {
  align-items: center;
  border-radius: 50%;
  color: #8a8a8a;
  display: inline-flex;
  height: 30px;
  justify-content: center;
  margin-left: 10px;
  width: 30px;
}
.chat-window .chat-cont-right .chat-body {
  background-color: #f5f5f6;
}
.chat-window .chat-cont-right .chat-body ul.list-unstyled {
  margin: 0 auto;
  padding: 15px;
  width: 100%;
}
.chat-window .chat-cont-right .chat-body .media .avatar {
  height: 30px;
  width: 30px;
}
.chat-window .chat-cont-right .chat-body .media .media-body {
  margin-left: 20px;
}
.chat-window .chat-cont-right .chat-body .media .media-body .msg-box > div {
  padding: 10px 15px;
  border-radius: 0.25rem;
  display: inline-block;
  position: relative;
}
.chat-window .chat-cont-right .chat-body .media .media-body .msg-box > div p {
  color: #333;
  margin-bottom: 0;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media
  .media-body
  .msg-box
  + .msg-box {
  margin-top: 5px;
}
.chat-window .chat-cont-right .chat-body .media.received {
  margin-bottom: 20px;
}
.chat-window .chat-cont-right .chat-body .media:last-child {
  margin-bottom: 0;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.received
  .media-body
  .msg-box
  > div {
  background-color: #fff;
}
.chat-window .chat-cont-right .chat-body .media.sent {
  margin-bottom: 20px;
}
.chat-window .chat-cont-right .chat-body .media.sent .media-body {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 0;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div {
  background-color: #e3e3e3;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div
  p {
  color: #333;
}
.chat-window .chat-cont-right .chat-body .chat-date {
  font-size: 14px;
  margin: 1.875rem 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: capitalize;
}
.chat-window .chat-cont-right .chat-body .chat-date:before {
  background-color: #e0e3e4;
  content: "";
  height: 1px;
  margin-right: 28px;
  position: absolute;
  right: 50%;
  top: 50%;
  width: 100%;
}
.chat-window .chat-cont-right .chat-body .chat-date:after {
  background-color: #e0e3e4;
  content: "";
  height: 1px;
  left: 50%;
  margin-left: 28px;
  position: absolute;
  top: 50%;
  width: 100%;
}
.chat-window .chat-cont-right .chat-footer {
  background-color: #fff;
  border-top: 1px solid #e0e3e4;
  padding: 10px 15px;
  position: relative;
}
.chat-window .chat-cont-right .chat-footer .input-group {
  width: 100%;
}
.chat-window .chat-cont-right .chat-footer .input-group .form-control {
  background-color: #f5f5f6;
  border: none;
  border-radius: 50px;
}
.chat-window .chat-cont-right .chat-footer .input-group .form-control:focus {
  background-color: #f5f5f6;
  border: none;
  box-shadow: none;
}
.chat-window
  .chat-cont-right
  .chat-footer
  .input-group
  .input-group-prepend
  .btn,
.chat-window
  .chat-cont-right
  .chat-footer
  .input-group
  .input-group-append
  .btn {
  background-color: transparent;
  border: none;
  color: #9f9f9f;
}
.chat-window
  .chat-cont-right
  .chat-footer
  .input-group
  .input-group-append
  .btn.msg-send-btn {
  background-color: #00d0f1;
  border-color: #00d0f1;
  border-radius: 50%;
  color: #fff;
  margin-left: 10px;
}
.msg-typing {
  width: auto;
  height: 24px;
  padding-top: 8px;
}
.msg-typing span {
  height: 8px;
  width: 8px;
  float: left;
  margin: 0 1px;
  background-color: #a0a0a0;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
}
.msg-typing span:nth-of-type(1) {
  animation: 1s blink infinite 0.33333s;
}

.msg-typing span:nth-of-type(2) {
  animation: 1s blink infinite 0.66666s;
}

.msg-typing span:nth-of-type(3) {
  animation: 1s blink infinite 0.99999s;
}
.chat-window .chat-cont-right .chat-body .media.received .media-body .msg-box {
  position: relative;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.received
  .media-body
  .msg-box:first-child:before {
  border-bottom: 6px solid transparent;
  border-right: 6px solid #fff;
  border-top: 6px solid transparent;
  content: "";
  height: 0;
  left: -6px;
  position: absolute;
  right: auto;
  top: 8px;
  width: 0;
}
.chat-window .chat-cont-right .chat-body .media.sent .media-body .msg-box {
  padding-left: 50px;
  position: relative;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box:first-child:before {
  border-bottom: 6px solid transparent;
  border-left: 6px solid #e3e3e3;
  border-top: 6px solid transparent;
  content: "";
  height: 0;
  left: auto;
  position: absolute;
  right: -6px;
  top: 8px;
  width: 0;
}
.chat-msg-info {
  align-items: center;
  display: flex;
  clear: both;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 5px 0 0;
}
.chat-msg-info li {
  font-size: 13px;
  padding-right: 16px;
  position: relative;
}
.chat-msg-info li:not(:last-child):after {
  position: absolute;
  right: 8px;
  top: 50%;
  content: "";
  height: 4px;
  width: 4px;
  background: #d2dde9;
  border-radius: 50%;
  transform: translate(50%, -50%);
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  .chat-msg-info
  li:not(:last-child)::after {
  right: auto;
  left: 8px;
  transform: translate(-50%, -50%);
  background: #aaa;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.received
  .media-body
  .msg-box
  > div
  .chat-time {
  color: rgba(50, 65, 72, 0.4);
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div
  .chat-time {
  color: rgba(50, 65, 72, 0.4);
}
.chat-msg-info li a {
  color: #777;
}
.chat-msg-info li a:hover {
  color: #2c80ff;
}
.chat-seen i {
  color: #00d285;
  font-size: 16px;
}
.chat-msg-attachments {
  padding: 4px 0;
  display: flex;
  width: 100%;
  margin: 0 -1px;
}
.chat-msg-attachments > div {
  margin: 0 1px;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div
  .chat-msg-info {
  flex-direction: row-reverse;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div
  .chat-msg-attachments {
  flex-direction: row-reverse;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div
  .chat-msg-info
  li {
  padding-left: 16px;
  padding-right: 0;
  position: relative;
}
.chat-attachment img {
  max-width: 100%;
}
.chat-attachment {
  position: relative;
  max-width: 130px;
  overflow: hidden;
}
.chat-attachment {
  border-radius: 0.25rem;
}
.chat-attachment:before {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000;
  content: "";
  opacity: 0.4;
  transition: all 0.4s;
}
.chat-attachment:hover:before {
  opacity: 0.6;
}
.chat-attach-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  padding: 7px 15px;
  font-size: 13px;
  opacity: 1;
  transition: all 0.4s;
}
.chat-attach-download {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.4s;
  color: #fff;
  width: 32px;
  line-height: 32px;
  background: rgba(255, 255, 255, 0.2);
  text-align: center;
}
.chat-attach-download:hover {
  color: #495463;
  background: #fff;
}
.chat-attachment:hover .chat-attach-caption {
  opacity: 0;
}
.chat-attachment:hover .chat-attach-download {
  opacity: 1;
}
.chat-attachment-list {
  display: flex;
  margin: -5px;
}
.chat-attachment-list li {
  width: 33.33%;
  padding: 5px;
}
.chat-attachment-item {
  border: 5px solid rgba(230, 239, 251, 0.5);
  height: 100%;
  min-height: 60px;
  text-align: center;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chat-window
  .chat-cont-right
  .chat-body
  .media.sent
  .media-body
  .msg-box
  > div:hover
  .chat-msg-actions {
  opacity: 1;
}
.chat-msg-actions {
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 0;
  transition: all 0.4s;
  z-index: 2;
}
.chat-msg-actions > a {
  padding: 0 10px;
  color: #495463;
  font-size: 24px;
}
.chat-msg-actions > a:hover {
  color: #2c80ff;
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}
.btn-file {
  align-items: center;
  display: inline-flex;
  font-size: 20px;
  justify-content: center;
  overflow: hidden;
  padding: 0 0.75rem;
  position: relative;
  vertical-align: middle;
}
.btn-file input {
  cursor: pointer;
  filter: alpha(opacity=0);
  font-size: 23px;
  height: 100%;
  margin: 0;
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
}

/*-----------------
	21. Product
-----------------------*/

.product {
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  border: 1px solid #e7e7e7;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  margin-bottom: 1.875rem;
}
.product-inner {
  overflow: hidden;
  position: relative;
  width: 100%;
}
.product-inner img {
  width: 100%;
  height: auto;
}
.product-inner .cart-btns {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cart-btns .btn {
  width: 120px;
  display: block;
  transition: all 0.5s;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
}
.cart-btns .btn + .btn {
  margin-top: 10px;
}
.product .pro-desc {
  margin-top: 10px;
}
.pro-desc .price {
  font-size: 18px;
  line-height: 20px;
  color: #333;
  font-weight: bold;
}
.product:hover .cart-btns {
  opacity: 1;
}
.pro-desc h5 {
  font-size: 1rem;
}
.pro-desc h5 a {
  color: #333;
}
.product-det {
  position: relative;
  display: block;
  float: left;
  width: 100%;
  min-height: 40px;
}
.product-desc {
  padding: 0 0 0 70px;
}
.product-det > img {
  top: 0;
  width: 60px;
  position: absolute;
  left: 0;
}
.product-desc span,
.product-desc a {
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
}

/*-----------------
	22. Product Details
-----------------------*/

.product-content {
  position: relative;
}
.product-content p {
  color: #333;
  margin: 0 0 20px;
}
.product-content p:last-child {
  margin-bottom: 0;
}
.proimage-thumb {
  float: left;
  list-style: none;
  padding: 0;
}
.proimage-thumb li {
  float: left;
  height: 60px;
  width: 80px;
  text-align: center;
  margin: 13px 12px 0 0;
}
.proimage-thumb li img {
  display: block;
  height: 62px;
  width: 81px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  position: relative;
}
.rated {
  color: #fc0;
}
.product_price {
  font-size: 30px;
  font-weight: bold;
}
.review-list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.review-list li {
  clear: both;
  padding-left: 80px;
}
.review-list li .review {
  margin-bottom: 1.875rem;
}
.review-list li .review-author {
  margin-left: -80px;
  position: absolute;
}
.review-list li img.avatar {
  height: 58px;
  width: 58px;
  border-radius: 58px;
}
.review-by {
  display: block;
  font-size: 14px;
  line-height: 21px;
  margin: 0 0 10px;
}
.review-list .review-block p {
  line-height: 20px;
  margin: 0;
  text-align: justify;
}
.new-review label {
  font-size: 14px;
  font-weight: 500;
}
.new-review input.form-control {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  box-shadow: inherit;
  height: 40px;
}
.new-review textarea.form-control {
  border: 1px solid #e5e5e5;
  border-radius: 0;
  box-shadow: inherit;
}
.new-review .form-group {
  margin-bottom: 20px;
}
.review-submit .btn {
  background-color: #00bf6f;
  border-color: #00bf6f;
  border-radius: 0;
  font-size: 18px;
  padding: 8px 26px;
  color: #fff;
}
.review-date {
  color: #999;
}
.review-author-name {
  font-size: 18px;
  margin-bottom: 0.5rem;
  display: inline-block;
}
.product-reviews {
  margin-bottom: 1.875rem;
}
.rating {
  display: flex;
}
.rating i + i {
  margin-left: 2px;
}

/*-----------------
	23. Profile
-----------------------*/

.profile-header {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  padding: 1.5rem;
}
.profile-menu {
  background-color: #fff;
  border: 1px solid #f0f0f0;
  padding: 0.9375rem 1.5rem;
}
.profile-menu .nav-tabs.nav-tabs-solid {
  background-color: transparent;
}
.profile-header img {
  height: auto;
  max-width: 120px;
  width: 120px;
}
.profile-tab-cont {
  padding-top: 1.875rem;
}
.about-text {
  max-width: 500px;
}
.skill-tags span {
  background-color: #f4f4f5;
  border-radius: 4px;
  color: #66676b;
  display: inline-block;
  font-size: 15px;
  line-height: 22px;
  margin: 2px 0;
  padding: 5px 15px;
}
.edit-link {
  color: #66676b;
  font-size: 16px;
  margin-top: 4px;
}
.cal-icon {
  position: relative;
  width: 100%;
}
.cal-icon:after {
  color: #979797;
  content: "\f073";
  display: block;
  font-family: "FontAwesome";
  font-size: 15px;
  margin: auto;
  position: absolute;
  right: 15px;
  top: 10px;
}
.form-title {
  width: 100%;
  max-width: 100%;
  padding: 0;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: inherit;
  color: #333;
  white-space: normal;
  position: relative;
  display: block;
  margin-bottom: 20px;
}
.form-title:before {
  content: "";
  position: absolute;
  left: 0px;
  right: 0px;
  height: 1px;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.1);
}
.form-title span {
  padding: 0px 0.5rem 0 0;
  background-color: #fff;
  display: inline-block;
  z-index: 2;
  position: relative;
}

/*-----------------
	24. Template Options
-----------------------*/

.skin-settings {
  z-index: 999;
  position: fixed;
  top: 50%;
  width: 190px;
  border: 0;
  box-shadow: none;
  padding: 0;
  border-bottom-left-radius: 2px;
  right: -190px;
  background: #fff;
  transition: all 0.4s ease;
}
.skin-settings.active {
  right: 0;
  transition: all 0.4s ease;
}
.skin-settings .skin-sett-icon {
  background-color: #fff;
  border-bottom-left-radius: 2px;
  border-color: #e0e0e0;
  border-style: solid;
  border-top-left-radius: 2px;
  border-width: 1px 0 1px 1px;
  color: #666;
  cursor: pointer;
  display: inline-block;
  font-size: 20px;
  height: 48px;
  left: -47px;
  line-height: 48px;
  position: absolute;
  text-align: center;
  top: 0;
  width: 48px;
}
.skin-settings .skin-sett-body {
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  border-top: 1px solid #e0e0e0;
  color: #616161;
  padding: 14px 10px;
}
.skin-sett-body h4 {
  color: #666;
  font-size: 1.125rem;
}
.skin-settings .skin-colors {
  font-size: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
.skin-settings .skin-colors > li {
  display: inline-block;
}
.skin-settings .skin-colors li a {
  border-radius: 2px;
  cursor: pointer;
  display: block;
  height: 36px;
  margin: 0 3px;
  position: relative;
  width: 36px;
}
.skin-settings .skin-colors .skin-red {
  background-color: #c12942;
}
.skin-settings .skin-colors .skin-orange {
  background-color: #ff7000;
}
.skin-settings .skin-colors .skin-teal {
  background: linear-gradient(to right, #00a0b0 0%, #00d2e6 100%);
}
.skin-settings .skin-colors .skin-purple {
  background-color: #00d0f1;
}
.skin-settings .skin-colors li a.active:after {
  color: #fff;
  content: "\f00c";
  display: block;
  font-family: "FontAwesome";
  font-size: 15px;
  left: 50%;
  margin: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

/*-----------------
	25. Blog
-----------------------*/

.blog {
  border: 1px solid #f0f0f0;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 30px;
  padding: 1.5rem;
  position: relative;
}
.blog-image {
  overflow: hidden;
}
.blog-image,
.blog-image > a,
.blog-image img {
  display: block;
  position: relative;
  width: 100%;
  height: auto;
}
.blog-image img {
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  transform: translateZ(0);
  -moz-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -ms-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -o-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -webkit-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
}
.blog-image a:hover img {
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  transform: scale(1.15);
}
.blog-image {
  margin-bottom: 30px;
}
.blog-content {
  position: relative;
}
.blog-title {
  font-size: 22px;
  margin: 0 0 10px;
}
.blog-title a {
  color: #272b41;
}
.blog-title a:hover {
  color: #20c0f3;
}
.blog-content p {
  color: #666;
  font-size: 14px;
  margin: 0 0 30px;
}
.read-more {
  display: inline-block;
  font-size: 16px;
  padding: 0;
  color: #20c0f3;
  /* text-decoration: underline; */
  font-weight: bold;
}
.blog-info {
  color: #757575;
  font-size: 14px;
  margin-bottom: 15px;
}
.blog-info a {
  color: #757575;
}
.blog-info a:hover {
  color: #757575;
}
.blog-info i {
  color: #20c0f3;
  font-size: 14px;
  margin-right: 5px;
}
.entry-meta {
  color: #757575;
  font-size: 14px;
  list-style: none;
  margin-bottom: 15px;
  padding: 0;
}
.entry-meta li {
  display: inline-block;
  margin-right: 15px;
}
.entry-meta li:last-child {
  margin-right: 0;
}
.blog-pagination .pagination {
  margin-bottom: 30px;
}
.blog-pagination .pagination li a {
  padding: 12px 20px;
  font-weight: 600;
  color: #2e3842;
  margin-right: 10px;
  border-radius: inherit !important;
  border-color: #f0f0f0;
}
.blog-pagination .pagination li.disabled a {
  border-color: #f0f0f0;
}
.blog-pagination .pagination li.active a {
  background: #20c0f3;
  border-color: transparent;
  color: #ffffff;
}
.post-left ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.post-left ul li {
  margin-bottom: 5px;
  margin-right: 20px;
}
.post-left ul li:last-child {
  margin-right: 0;
}
.post-author a {
  display: flex;
  align-items: center;
}
.video {
  position: relative;
  padding-bottom: 56%;
  height: 0;
  overflow: hidden;
}
.video iframe,
.video object,
.video embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
}
.latest-posts {
  margin: 0;
  padding: 0;
}
.latest-posts li {
  display: table;
  width: 100%;
  margin-bottom: 20px;
}
.latest-posts li:last-child {
  padding-bottom: 0px;
  margin-bottom: 0px;
  border-bottom: none;
}
.post-thumb {
  border-radius: 4px;
  width: 80px;
  float: left;
  overflow: hidden;
}
.post-thumb a img {
  border-radius: 4px;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  transform: translateZ(0);
  -moz-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -ms-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -o-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  -webkit-transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
  transition: all 2000ms cubic-bezier(0.19, 1, 0.22, 1) 0ms;
}
.post-thumb a:hover img {
  -webkit-transform: scale(1.15);
  -moz-transform: scale(1.15);
  transform: scale(1.15);
}
.post-info {
  margin-left: 95px;
}
.post-info h4 {
  font-size: 15px;
  margin: 0 0 5px;
}
.post-info h4 a {
  color: #272b41;
}
.post-info h4 a:hover {
  color: #20c0f3;
}
.post-info p {
  color: #757575;
  font-size: 12px;
  margin: 0;
}
.post-info p i {
  color: #20c0f3;
  font-size: 14px;
  margin-right: 4px;
}
.category-widget .categories {
  list-style: none;
  margin: 0;
  padding: 0;
}
.category-widget .categories li {
  margin-bottom: 20px;
}
.category-widget .categories li:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.category-widget .categories li a {
  color: #2e3842;
  font-size: 15px;
  font-weight: 500;
}
.category-widget .categories li a span {
  float: right;
  color: #757575;
}
.category-widget .categories li a:hover {
  color: #20c0f3;
}
.category-widget .categories > li > a > i {
  color: #20c0f3;
  font-size: 18px;
  margin-right: 10px;
}
.tags-widget .card-body {
  padding-bottom: 1rem;
}
.tags {
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}
.tags li {
  float: left;
}
.tag {
  background-color: #fff;
  border-radius: 4px;
  color: #272b41;
  padding: 5px 10px;
  position: relative;
  margin: 0 0.5rem 0.5rem 0;
  font-size: 14px;
  border: 1px solid #ccc;
  display: inline-block;
}
.tag:hover {
  background-color: #20c0f3;
  border-color: #20c0f3;
  color: #fff;
}
.comment-by {
  display: block;
  font-size: 14px;
  line-height: 21px;
  margin: 0 0 10px;
}
.comments-list .comment-block p {
  font-size: 14px;
  margin-bottom: 5px;
}

/*-----------------
	26. Blog Details
-----------------------*/

.blog-view .blog-title {
  font-size: 24px;
}
.blog-content p:last-child {
  margin-bottom: 0;
}
.blog-view .blog-info {
  border: 0;
  margin-bottom: 20px;
  padding: 0;
}
.social-share {
  float: left;
  list-style: none;
  margin: 0;
  padding: 0;
}
.social-share > li {
  display: inline-block;
  float: left;
  margin-left: 10px;
  text-align: center;
}
.social-share > li:first-child {
  margin-left: 0;
}
.social-share > li > a {
  border: 1px solid #dfdfdf;
  color: #666;
  display: inline-block;
  font-size: 22px;
  height: 40px;
  line-height: 40px;
  width: 40px;
}
.social-share > li > a:hover {
  background-color: #20c0f3;
  color: #fff;
  border-color: #20c0f3;
}
.blog-reply > a {
  color: #999;
  font-size: 12px;
  font-weight: 500;
}
.blog-date {
  color: #999;
  font-size: 12px;
}
.blog-comments .comments-list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
}
.blog-comments .comments-list li {
  clear: both;
  padding-left: 80px;
}
.blog-comments .comments-list li .comment {
  margin-bottom: 20px;
}
.blog-comments .comments-list li .comment-author {
  left: 0;
  position: absolute;
}
.blog-comments .comments-list li img.avatar {
  height: 58px;
  width: 58px;
  border-radius: 58px;
}
.blog-comments .comment-btn {
  color: #20c0f3;
  display: inline-block;
  font-weight: 500;
  font-size: 15px;
}
.blog-author-name {
  color: #272b41;
  font-size: 16px;
  font-weight: 600;
}
.new-comment label {
  font-weight: 500;
}
.comment-submit .btn {
  background-color: #20c0f3;
  border-color: #20c0f3;
  border-radius: 0;
  font-size: 18px;
  padding: 8px 26px;
  color: #fff;
}
.about-author-img {
  background-color: #fff;
  height: 100px;
  overflow: hidden;
  position: absolute;
  width: 100px;
}
.author-details {
  margin-left: 120px;
}
.about-author {
  min-height: 100px;
}
.author-details .blog-author-name {
  display: inline-block;
  margin-bottom: 10px;
}
.post-author img {
  border-radius: 100%;
  width: 28px;
  margin-right: 5px;
}
.custom-edit-service textarea.form-control {
  min-height: 200px;
}
.custom-edit-service .service-upload {
  border: 1px solid #dcdcdc;
  border-radius: 0.25rem;
  text-align: center;
  padding: 70px 0;
  margin-bottom: 30px;
  background-color: #fff;
  position: relative;
}
.custom-edit-service .service-upload input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}
.custom-edit-service .service-upload i {
  font-size: 50px;
  color: #858585;
}
.custom-edit-service .service-upload span {
  font-size: 15px;
  color: #858585;
  margin-top: 14px;
  display: block;
}
.custom-edit-service .upload-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}
.custom-edit-service .upload-wrap li {
  margin: 10px;
}
.custom-edit-service .upload-wrap li:first-child {
  margin-left: 0;
}
.custom-edit-service .upload-wrap li .upload-images {
  width: 80px;
  position: relative;
}
.custom-edit-service .upload-wrap li img {
  max-width: 100%;
}
/*-----------------
	27. Blog Grid
-----------------------*/

.grid-blog .blog-title {
  font-size: 18px;
  margin: 0 0 5px;
  min-height: 43px;
}
.grid-blog .blog-content p {
  margin: 0 0 15px;
}
.grid-blog .blog-info {
  margin-bottom: 15px;
}
.grid-blog .blog-image {
  margin-bottom: 20px;
}
.blog.grid-blog {
  padding: 20px;
}
.grid-blog .entry-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0;
}
.grid-blog .entry-meta li {
  margin-bottom: 10px;
}
.grid-blog .entry-meta li:last-child {
  flex: 0 0 100px;
  max-width: 100px;
}
.grid-blog .post-author {
  width: 189px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.grid-blog .post-author a:hover {
  color: #20c0f3;
}

/*-----------------
	28. Responsive
-----------------------*/

@media only screen and (min-width: 768px) {
  .avatar-xxl {
    width: 8rem;
    height: 8rem;
  }
  .avatar-xxl .border {
    border-width: 4px !important;
  }
  .avatar-xxl .rounded {
    border-radius: 12px !important;
  }
  .avatar-xxl .avatar-title {
    font-size: 42px;
  }
  .avatar-xxl.avatar-away:before,
  .avatar-xxl.avatar-offline:before,
  .avatar-xxl.avatar-online:before {
    border-width: 4px;
  }
}

@media only screen and (min-width: 992px) {
  #toggle_btn {
    align-items: center;
    color: #333;
    display: inline-flex;
    float: left;
    font-size: 30px;
    height: 60px;
    justify-content: center;
    margin-left: 15px;
    padding: 0 15px;
  }
  .mini-sidebar .header-left .logo img {
    height: auto;
    max-height: 40px;
    width: auto;
  }
  .mini-sidebar .header .header-left .logo {
    display: none;
  }
  .mini-sidebar .header-left .logo.logo-small {
    display: block;
  }
  .mini-sidebar .header .header-left {
    padding: 0 5px;
    width: 78px;
  }
  .mini-sidebar .sidebar {
    width: 78px;
  }
  .mini-sidebar.expand-menu .sidebar {
    width: 240px;
  }
  .mini-sidebar .menu-title {
    visibility: hidden;
    white-space: nowrap;
  }
  .mini-sidebar.expand-menu .menu-title {
    visibility: visible;
  }
  .mini-sidebar .menu-title a {
    visibility: hidden;
  }
  .mini-sidebar.expand-menu .menu-title a {
    visibility: visible;
  }
  .modal-open.mini-sidebar .sidebar {
    z-index: 1051;
  }
  .mini-sidebar .sidebar .sidebar-menu ul > li > a span {
    display: none;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }
  .mini-sidebar.expand-menu .sidebar .sidebar-menu ul > li > a span {
    display: inline;
    opacity: 1;
  }
  .mini-sidebar.expand-menu .sidebar .sidebar-menu > ul > li > a i {
    font-size: 24px;
    width: 20px;
  }
  .mini-sidebar .page-wrapper {
    margin-left: 78px;
  }
}

@media only screen and (max-width: 1400px) {
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-name,
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-last-chat {
    max-width: 180px;
  }
}
@media only screen and (max-width: 1199px) {
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-name,
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-last-chat {
    max-width: 150px;
  }
  .chat-window .chat-cont-left {
    flex: 0 0 40%;
    max-width: 40%;
  }
  .chat-window .chat-cont-right {
    flex: 0 0 60%;
    max-width: 60%;
  }
}
.navBar {
  display: none;
}

@media only screen and (max-width: 991.98px) {
  .navBar {
    background-color: #00a0b0;
    display: inherit;
    position: relative;
  }

  .navBar button {
    border: none;
    background-color: var(--theme-box-shadow-light);
    color: #333 !important;
    cursor: pointer;
    display: block;
    font-size: 24px;
    height: 60px;
    left: 0;
    line-height: 60px;
    padding: 0 15px;
    position: absolute;
    text-align: center;
    top: 0;
    z-index: 10;
  }

  .menuNav {
    transition: 0.5s;
    overflow-y: scroll;
    list-style: none;
    position: fixed;
    top: 0;
    left: -2rem;
    bottom: 0;
    height: 100vh;
    width: 0;
    overflow: hidden;
    max-width: 290px;
    /* z-index: 9; */
  }

  .menuNav.showMenu {
    width: 100%;
  }
  .menuNav ul {
    margin-top: 1.8rem;
  }
  .menuNav li:first-child {
    margin-top: 2rem;
  }
  .header .header-left {
    position: absolute;
    width: 100%;
  }
  .mobile_btn {
    color: #333 !important;
    cursor: pointer;
    display: block;
    font-size: 24px;
    height: 60px;
    left: 0;
    line-height: 60px;
    padding: 0 15px;
    position: absolute;
    text-align: center;
    top: 0;
    z-index: 10;
  }
  .btn_new {
    display: inherit;
    background-color: #08508e;
  }
  .new_collapse {
    background-color: #009efb;
  }

  #toggle_btn {
    display: none;
  }
  .top-nav-search {
    display: none;
  }
  .login-wrapper .loginbox .login-left {
    padding: 80px 50px;
    width: 50%;
  }
  .login-wrapper .loginbox .login-right {
    padding: 50px;
    width: 50%;
  }
  .sidebar {
    margin-left: -225px;
    width: 225px;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
    z-index: 1041;
  }
  .page-wrapper {
    margin-left: 0;
    padding-left: 0;
    padding-right: 0;
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    transition: all 0.4s ease;
  }
  .chat-window .chat-scroll {
    max-height: calc(100vh - 255px);
  }
  .chat-window .chat-cont-left,
  .chat-window .chat-cont-right {
    flex: 0 0 100%;
    max-width: 100%;
    transition: left 0.3s ease-in-out 0s, right 0.3s ease-in-out 0s;
    width: 100%;
  }
  .chat-window .chat-cont-left {
    border-right: 0;
  }
  .chat-window .chat-cont-right {
    position: absolute;
    right: calc(-100% + -1.875rem);
    top: 0;
  }
  .chat-window .chat-cont-right .chat-header {
    justify-content: start;
  }
  .chat-window .chat-cont-right .chat-header .back-user-list {
    display: block;
  }
  .chat-window .chat-cont-right .chat-header .chat-options {
    margin-left: auto;
  }
  .chat-window.chat-slide .chat-cont-left {
    left: calc(-100% + -1.875rem);
  }
  .chat-window.chat-slide .chat-cont-right {
    right: 0;
  }
  .sidebar-overlay.opened {
    display: block;
  }
}

@media only screen and (max-width: 767.98px) {
  .page-wrapper {
    margin-left: 80px;
  }
  body {
    font-size: 0.9375rem;
  }
  h1,
  .h1 {
    font-size: 2rem;
  }
  h2,
  .h2 {
    font-size: 1.75rem;
  }
  h3,
  .h3 {
    font-size: 1.5rem;
  }
  h4,
  .h4 {
    font-size: 1.125rem;
  }
  h5,
  .h5 {
    font-size: 1rem;
  }
  h6,
  .h6 {
    font-size: 0.875rem;
  }
  .header .has-arrow .dropdown-toggle:after {
    display: none;
  }
  .user-menu.nav > li > a > span:not(.user-img) {
    display: none;
  }
  .navbar-nav .open .dropdown-menu {
    float: left;
    position: absolute;
  }
  .navbar-nav.user-menu .open .dropdown-menu {
    left: auto;
    right: 0;
  }
  .header .header-left {
    padding: 0 15px;
  }
  .header .header-left .logo {
    display: none;
  }
  .header-left .logo.logo-small {
    display: inline-block;
  }
  .login-wrapper .loginbox .login-left {
    display: none;
  }
  .login-wrapper .loginbox {
    max-width: 450px;
    min-height: unset;
  }
  .login-wrapper .loginbox .login-right {
    float: none;
    padding: 1.875rem;
    width: 100%;
  }
  .invoice-container {
    padding: 20px;
  }
  .left-action {
    text-align: center;
    margin-bottom: 15px;
  }
  .right-action {
    text-align: center;
  }
  .top-action-left .float-left {
    float: none !important;
  }
  .top-action-left .btn-group {
    margin-bottom: 15px;
  }
  .top-action-right {
    text-align: center;
  }
  .top-action-right a.btn.btn-white {
    margin-bottom: 15px;
  }
  .mail-sent-time {
    float: left;
    margin-top: 10px;
    width: 100%;
  }
  .profile-btn {
    flex: 0 0 100%;
    margin-top: 20px;
  }
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-name,
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-last-chat {
    max-width: 250px;
  }
  .app-dropdown {
    display: none;
  }
  .edit-link {
    font-size: 0.875rem;
    margin-top: 0;
  }
  .product_price {
    font-size: 1.5rem;
  }
  .login-wrapper .loginbox .login-right h1 {
    font-size: 22px;
  }
  .error-box h1 {
    font-size: 6em;
  }
  .error-box .btn {
    font-size: 15px;
    min-width: 150px;
    padding: 8px 20px;
  }
  .dash-count {
    font-size: 16px;
  }
}

@media only screen and (max-width: 575.98px) {
  .card {
    margin-bottom: 0.9375rem;
  }
  .page-wrapper > .content {
    padding: 0.9375rem 0.9375rem 0;
  }
  .chat-window {
    margin-bottom: 0.9375rem;
  }
  .card-body {
    padding: 1.25rem;
  }
  .card-header {
    padding: 0.75rem 1.25rem;
  }
  .card-footer {
    padding: 0.75rem 1.25rem;
  }
  .card-chart .card-body {
    padding: 5px;
  }
  .page-header {
    margin-bottom: 0.9375rem;
  }
  .account-wrapper {
    padding: 0.9375rem;
  }
  .pagination-lg .page-link {
    font-size: 1.2rem;
    padding: 0.5rem 0.625rem;
  }
  .profile-image {
    flex: 0 0 100%;
    margin-bottom: 20px;
    text-align: center;
  }
  .profile-user-info {
    text-align: center;
  }
  .profile-btn {
    text-align: center;
  }
  .invoice-details,
  .invoice-payment-details > li span {
    float: left;
    text-align: left;
  }
  .fc-toolbar .fc-right {
    display: inline-block;
    float: none;
    margin: 10px auto 0;
    width: 200px;
    clear: both;
  }
  .fc-toolbar .fc-left {
    float: none;
    margin: 0 auto;
    width: 200px;
  }
  .fc-toolbar .fc-center {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .fc-toolbar .fc-center h2 {
    width: 100%;
  }
  .profile-tab-cont {
    padding-top: 1.25rem;
  }
  .chat-window .chat-cont-right .chat-header .media .media-body {
    display: none;
  }
}

@media only screen and (max-width: 479px) {
  .page-wrapper {
    width: 22rem;
  }
  .add-btn {
    font-size: 14px;
    padding: 6px 7px;
  }
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-name,
  .chat-window
    .chat-cont-left
    .chat-users-list
    a.media
    .media-body
    > div:first-child
    .user-last-chat {
    max-width: 160px;
  }
  .page-header .breadcrumb {
    display: none;
  }
}

.dropdown4 {
  display: block;
  clear: both;
  text-align: inherit;
  white-space: nowrap;
  background: none;
  position: relative;
  height: 2rem;
  width: 7.5rem;
  border-radius: 7px;
  border: 1px solid #e6e9f4;
  background-color: white;
}
.dropdown3 {
  display: block;
  clear: both;
  text-align: center;
  /* white-space: nowrap; */
  /* background: none; */
  position: relative;
  height: 2.5rem;
  width: 10rem;
  border-radius: 7px;
  border: 1px solid #e6e9f4;
  background-color: #eef1fe;
}

.dropdown-header4 {
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown-header3 {
  padding: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown-body3 {
  position: absolute;
  top: 2rem;
  left: -10rem;
  z-index: 1060;
  width: 276px;
  padding: 1px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  height: 26rem;
  padding: 5px;
  border-top: 1px solid #e5e8ec;
  display: none;
  /* background-color: #009efb; */
}
.dropdown-body4 {
  position: absolute;
  top: 2rem;
  left: -10rem;
  z-index: 1060;
  width: 276px;
  padding: 1px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-break: auto;
  line-height: 1.5;
  text-align: left;
  text-align: start;
  text-decoration: none;
  text-shadow: none;
  text-transform: none;
  white-space: normal;
  word-break: normal;
  word-spacing: normal;
  font-size: 0.875rem;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  height: 26rem;
  padding: 5px;
  border-top: 1px solid #e5e8ec;
  display: none;
  /* background-color: #009efb; */
}

.dropdown-body4.open {
  display: block;
}

.dropdown-item4 {
  padding: 10px;
}

.dropdown-item4:hover {
  cursor: pointer;
}

.dropdown-item-dot4 {
  opacity: 0;
  color: #91a5be;
  transition: all 0.2s ease-in-out;
}

.dropdown-item-dot4.selected {
  opacity: 1;
}

.icon4 {
  font-size: 13px;
  color: #91a5be;
  transform: rotate(0deg);
  transition: all 0.2s ease-in-out;
}

.icon4.open {
  transform: rotate(90deg);
}
.dropdown-body3.open {
  display: block;
}

.dropdown-item3 {
  padding: 10px;
}

.dropdown-item3:hover {
  cursor: pointer;
}

.dropdown-item-dot3 {
  opacity: 0;
  color: #91a5be;
  transition: all 0.2s ease-in-out;
}

.dropdown-item-dot3.selected {
  opacity: 1;
}

.icon3 {
  font-size: 13px;
  color: #91a5be;
  transform: rotate(0deg);
  transition: all 0.2s ease-in-out;
}

.icon3.open {
  transform: rotate(90deg);
}