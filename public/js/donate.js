var widget =
	widget ||
	(function() {
		var style = '';
		var html = '';
		var color = '';
		var text = '';
		var id = '';
		return {
			init: function(pText, pColor, pId) {
				color = pColor;
				text = pText;
				id = pId;
				style =
          `
          img.widgetimg {
            display: initial !important;
            vertical-align: middle;
            height: 13px !important;
            width: 20px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            border: none;
            margin-top: 0;
            margin-right: 5px !important;
            margin-left: 0 !important;
            margin-bottom: 3px !important;
            content: url('imgs/cup-border.png')
          }

          .btn-container {
            display: inline-block !important;
            white-space: nowrap;
            min-width: 160px
          }

          span.widgettext {
            color: #fff !important;
            letter-spacing: -0.15px !important;
            text-wrap: none;
            vertical-align: middle;
            line-height: 33px !important;
            padding: 0;
            text-align: center;
            text-decoration: none !important;
            text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);
          }

          .widgettext a {
            color: #fff !important;
            text-decoration: none:important;
          }

          .widgettext a:hover {
            color: #fff !important;
            text-decoration: none
          }

          a.widget-button {
            box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
            line-height: 36px !important;
            min-width: 150px;
            display: inline-block !important;
            background-color: #29abe0;
            padding: 2px 12px !important;
            text-align: center !important;
            border-radius: 7px;
            color: #fff;
            cursor: pointer;
            overflow-wrap: break-word;
            vertical-align: middle;
            border: 0 none #fff !important;
            font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
            text-decoration: none;
            text-shadow: none;
            font-weight: 700 !important;
            font-size: 14px !important
          }

          a.widget-button:visited {
            color: #fff !important;
            text-decoration: none !important
          }

          a.widget-button:hover {
            opacity: .85;
            color: #f5f5f5 !important;
            text-decoration: none !important
          }

          a.widget-button:active {
            color: #f5f5f5 !important;
            text-decoration: none !important
          }

          .widgettext img.widgetimg {
            height: 15px !important;
            display: initial;
            animation: widget-wiggle 3s infinite;
          }
          `;
				style =
					style +
					'@keyframes widget-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}';
				style = '<style>' + style + '</style>';
				html =
					"<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
				html +=
					'<div class=btn-container><a title="Support me on ko-fi.com" class="widget-button" style="background-color:[color];" href="[id]" target="_blank"> <span class="widgettext"><img src="imgs/cup-border.png" alt="Ko-fi donations" class="widgetimg"/>[text]</span></a></div>';
			},
			getHTML: function() {
				var rtn = style + html.replace('[color]', color).replace('[text]', text).replace('[id]', id);
				return rtn;
			},
			draw: function() {
				document.writeln(style + html.replace('[color]', color).replace('[text]', text).replace('[id]', id));
			}
		};
  })();

var widget2 =
	widget2 ||
	(function() {
		var style = '';
		var html = '';
		var color = '';
		var text = '';
		var id = '';
		return {
			init: function(pText, pColor, pId) {
				color = pColor;
				text = pText;
				id = pId;
				style =
          `
          img.widget2img {
            display: initial !important;
            vertical-align: middle;
            height: 13px !important;
            width: 20px !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            border: none;
            margin-top: 0;
            margin-right: 5px !important;
            margin-left: 0 !important;
            margin-bottom: 3px !important;
            content: url('imgs/amazon.png')
          }

          .btn-container {
            display: inline-block !important;
            white-space: nowrap;
            min-width: 160px
          }

          span.widget2text {
            color: #fff !important;
            letter-spacing: -0.15px !important;
            text-wrap: none;
            vertical-align: middle;
            line-height: 33px !important;
            padding: 0;
            text-align: center;
            text-decoration: none !important;
            text-shadow: 0 1px 1px rgba(34, 34, 34, 0.05);
          }

          .widget2text a {
            color: #fff !important;
            text-decoration: none:important;
          }

          .widget2text a:hover {
            color: #fff !important;
            text-decoration: none
          }

          a.widget2-button {
            box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.2);
            line-height: 36px !important;
            min-width: 150px;
            display: inline-block !important;
            background-color: #29abe0;
            padding: 2px 12px !important;
            text-align: center !important;
            border-radius: 7px;
            color: #fff;
            cursor: pointer;
            overflow-wrap: break-word;
            vertical-align: middle;
            border: 0 none #fff !important;
            font-family: 'Quicksand', Helvetica, Century Gothic, sans-serif !important;
            text-decoration: none;
            text-shadow: none;
            font-weight: 700 !important;
            font-size: 14px !important
          }

          a.widget2-button:visited {
            color: #fff !important;
            text-decoration: none !important
          }

          a.widget2-button:hover {
            opacity: .85;
            color: #f5f5f5 !important;
            text-decoration: none !important
          }

          a.widget2-button:active {
            color: #f5f5f5 !important;
            text-decoration: none !important
          }

          .widget2text img.widget2img {
            height: 22px !important;
            width: 22px !important;
            display: initial;
            animation: widget2-wiggle 3s infinite;
          }
          `;
				style =
					style +
					'@keyframes widget2-wiggle{0%{transform:rotate(0) scale(1)}60%{transform:rotate(0) scale(1)}75%{transform:rotate(0) scale(1.12)}80%{transform:rotate(0) scale(1.1)}84%{transform:rotate(-10deg) scale(1.1)}88%{transform:rotate(10deg) scale(1.1)}92%{transform:rotate(-10deg) scale(1.1)}96%{transform:rotate(10deg) scale(1.1)}100%{transform:rotate(0) scale(1)}}';
				style = '<style>' + style + '</style>';
				html =
					"<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700' rel='stylesheet' type='text/css'>";
				html +=
					'<div class=btn-container><a title="Support me on ko-fi.com" class="widget2-button" style="background-color:[color];" href="[id]" target="_blank"> <span class="widget2text"><img src="imgs/amazon.png" alt="Ko-fi donations" class="widget2img"/>[text]</span></a></div>';
			},
			getHTML: function() {
				var rtn = style + html.replace('[color]', color).replace('[text]', text).replace('[id]', id);
				return rtn;
			},
			draw: function() {
				document.writeln(style + html.replace('[color]', color).replace('[text]', text).replace('[id]', id));
			}
		};
  })();



