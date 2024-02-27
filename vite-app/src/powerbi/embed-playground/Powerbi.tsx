import { PowerBIEmbed } from "powerbi-client-react"
import {models} from 'powerbi-client'

const Powerbi = () => {
    return (
        <>
            <h1>Powerbi react</h1>
            <PowerBIEmbed
	embedConfig = {{
		type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
		id: "5b218778-e7a5-4d73-8187-f10824047715",
		embedUrl: "https://app.powerbi.com/reportEmbed?reportId=5b218778-e7a5-4d73-8187-f10824047715&groupId=f089354e-8366-4e18-aea3-4cb4a3a50b48",
		accessToken: 'esdeaxds1234.shgss344/21323-342@!#42kcshedkjnb',
		tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
		settings: {
			panes: {
				filters: {
					expanded: false,
					visible: false
				}
			},
			background: models.BackgroundType.Transparent,
		}
	}}

	eventHandlers = {
		new Map([
			['loaded', function () {console.log('Report loaded');}],
			['rendered', function () {console.log('Report rendered');}],
			['error', function (event) {console.log(event?.detail);}],
			['visualClicked', () => console.log('visual clicked')],
			['pageChanged', (event) => console.log(event)],
		])
	}

	cssClassName = { "reportClass" }

	getEmbeddedComponent = { (embeddedReport) => {
		console.log(embeddedReport);
		
		// window.report = embeddedReport ;
		
	}}
/>
        </>
    )
}

export default Powerbi


// GET https://api.powerbi.com/v1.0/myorg/groups/f089354e-8366-4e18-aea3-4cb4a3a50b48/reports/5b218778-e7a5-4d73-8187-f10824047715
// {
// 	"datasetId": "cfafbeb1-8037-4d0c-896e-a46fb27ff229",
// 	"id": "5b218778-e7a5-4d73-8187-f10824047715",
// 	"name": "SalesMarketing",
// 	"webUrl": "https://app.powerbi.com/groups/f089354e-8366-4e18-aea3-4cb4a3a50b48/reports/5b218778-e7a5-4d73-8187-f10824047715",
// 	"embedUrl": "https://app.powerbi.com/reportEmbed?reportId=5b218778-e7a5-4d73-8187-f10824047715&groupId=f089354e-8366-4e18-aea3-4cb4a3a50b48"
//   }