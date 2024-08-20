import MainLayout from "./Layout/MainLayout";
import ProtectedRoute from "./Layout/ProtectedRoute";

const App = () => {
  return (
    <div>
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    </div>
  );
};

export default App;
