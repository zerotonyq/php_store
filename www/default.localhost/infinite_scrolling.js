const rootElement = document.getElementById("root");
const loader = document.getElementById("loading");
let currentReportIndex = 0;
let reportsCount = passedArray.length;


function BuiltReport(us_name, txt, dt) {
    let username = us_name;
    let text = txt;
    let date = dt;
    let report_html = `

<div class="report">
			<div class="report-table">
				<img class="user_icon" src="fox.png">
				<p class="user_name">${username} ${date}</p>
			</div>
			<div class="report-text">
				<p>
                ${text}
				</p>
			</div>
			<div class="report-photos">

			</div>
			<div class="report-comments">

			</div>

		</div>

`;
    return report_html;
}
function GetReports() {
    
    if (currentReportIndex !== reportsCount) {
        setTimeout(() => {
            let counter = 0;
            for (let i = currentReportIndex; (i < currentReportIndex + 7) && i < reportsCount; ++i) {

                username = passedArray[i]["Username"];
                date = passedArray[i]["Date"];
                text = passedArray[i]["Report_Text"];

                const rep = document.createElement("div");
                rep.innerHTML = BuiltReport(username, text, date);
                rootElement.append(rep);
                counter = i - currentReportIndex;
            }
            currentReportIndex += counter+1;
            
            console.log(currentReportIndex);
            console.log(reportsCount);
        }, 500)
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0
    };

    function handleIntersect(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                
                if (currentReportIndex !== reportsCount) {

                    GetReports();
                    
                }
            }
        });
    }

    let observer = new IntersectionObserver(handleIntersect,
        options);
    observer.observe(loader);
})

