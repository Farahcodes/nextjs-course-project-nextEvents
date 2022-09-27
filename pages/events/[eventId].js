import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import { EventSummary } from "../../components/event-detail/event-summary";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }
  return (
    <Fragment>
      <EventSummary />
    </Fragment>
  );
}

export default EventDetailPage;
