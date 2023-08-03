import axios from "axios";

const RESUME_API_BASE_URL = "http://localhost:8080/api/v1/resume";

class resumeService {
  saveresume(resume) {
    return axios.post(RESUME_API_BASE_URL, resume);
  }

  getEmployees() {
    return axios.get(RESUME_API_BASE_URL);
  }

  deleteEmployee(id) {
    return axios.delete(RESUME_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(RESUME_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(RESUME_API_BASE_URL + "/" + id, employee);
  }
}

export default new resumeService();