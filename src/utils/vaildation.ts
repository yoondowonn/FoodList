import * as yup from "yup";
import { ServiceType } from "type/ServiceType";

export const loginSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const findServiceTypeByUserAgent = (): ServiceType => {
  const userAgent = navigator.userAgent;
  if (userAgent.match(ServiceType.Light) != null) {
    return ServiceType.Light;
  } else if (userAgent.match(ServiceType.Dark) != null) {
    return ServiceType.Dark;
  } else {
    return ServiceType.None;
  }
};
