import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const fetchData = () => API.get("/data");
export const fetchHighRisk = () => API.get("/data/risk/High");
export const chatbotQuery = (query) =>
  API.get(`/chatbot?query=${query}`);

export const fetchDailyKPI = (date) =>
  API.get(`/data/kpi/daily?date=${date}`);

export const fetchTrend = (date) =>
  API.get(`/data/trend?date=${date}`);

export const fetchBinRanking = (date, zone) =>
  API.get("/data/bin-ranking", { params: { date, zone } });

export const fetchBinSummary = (date, zone, bin_id) =>
  API.get("/data/bin-summary", {
    params: { date, zone, bin_id },
  });


export const fetchRiskTrend = (params) =>
  API.get("/data/risk-trend", { params });

export const fetchRiskDistribution = (params) =>
  API.get("/data/risk-distribution", { params });

export const fetchZoneRisk = (params) =>
  API.get("/data/zone-risk", { params });

export const fetchMetricsTrend = (params) =>
  API.get("/data/metrics-trend", { params });

export const fetchScatter = (params) =>
  API.get("/data/scatter", { params });

export const fetchAlerts = (params = {}) => {
  return API.get("/data/alerts", { params });
};

export const fetchAlertsSummary = (params = {}) => {
  return API.get("/data/alerts/summary", { params });
};

export const acknowledgeAlert = (alertId) => {
  return API.patch(`/data/alerts/${alertId}/acknowledge`);
};
