import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder() {
  const fetcher = useFetcher();

  const isProcessing =
    fetcher.state === "submitting" || fetcher.state === "loading";

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">
        {isProcessing ? "Processing..." : "Make Priority"}
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
