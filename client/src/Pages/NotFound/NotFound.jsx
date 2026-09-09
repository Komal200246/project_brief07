import PageTitle from "../../components/ui/PageTitle";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className="not-found">

      <PageTitle>
        404
      </PageTitle>

      <p>
        The page you are looking for does not exist.
      </p>

      <Button onClick={() => navigate("/")}>
        Go Home
      </Button>

    </div>
  );
}

export default NotFound;