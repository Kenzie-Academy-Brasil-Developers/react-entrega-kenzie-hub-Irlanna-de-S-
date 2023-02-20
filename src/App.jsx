import { useState } from "react";
import { ToastContainer } from "react-toastify";
import AppRoutes from "./Routes";

function App() {
  const [user, setUser]= useState('');
  const [loading, setLoading] = useState(false);
  

  return (
    <>
      <AppRoutes user={user} setUser={setUser} loading={loading} setLoading={setLoading} />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
}

export default App;
