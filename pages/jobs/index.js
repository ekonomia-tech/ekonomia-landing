import JobsContainer from "../../components/jobs/JobsContainer";
import JobEntry from "../../components/jobs/JobsEntry";
import JobsHeader from "../../components/jobs/JobsHeader";
import jobs from "../api/misc/jobs.json";

export default function Jobs() {
	return (
		<div className="bg-primary py-6 animate-fadeIn">
			<JobsHeader />
			<JobsContainer>
				{jobs.map((j, i) => (
					<JobEntry data={j} key={i} />
				))}
			</JobsContainer>
		</div>
	);
}
