import { Hospital } from "../../../../../common/models/Hospital/hospital"
import { Requester } from "../../../../../common/models/Requester/requester"

export class RequestDonation {
  blood_type: string | undefined | any
  city_name?: any
  date_donation_order?: string
  description?: string
  hospital?: Hospital
  id?: string
  patient_name?: string
  qty_bags?: number
  requester?: Requester
  status?: string
}
