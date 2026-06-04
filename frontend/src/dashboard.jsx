import {
    Line
} from "react-chartjs-2"

function Dashboard() {

    const data = {

        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu"
        ],

        datasets: [

            {
                label: "Health Score",
                data: [60, 75, 80, 90]
            }
        ]
    }

    return (

        <div>

            <h1>Health Dashboard</h1>

            <Line data={data} />

        </div>
    )
}

export default Dashboard