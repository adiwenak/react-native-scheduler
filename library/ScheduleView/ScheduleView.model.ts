import { Activity } from "../shared"

export interface GridViewItem extends Activity {
  position: {
    x: number
    y: number
  }
  dimension: {
    height: number
    width: number
  }
  backgroundColor: string
}

export interface CategoryColour {
  [key: string]: string
}

export interface MapperParam {
  activities: Activity[]
  categoryColour: CategoryColour
  starTime: number
}

export interface MapperResult {
  maxColumn: number
  items: GridViewItem[]
}
