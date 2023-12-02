interface Position {
    latitude: number
    longitude: number
}

interface InfoWindow {
    title: string
    snippet: string
}

export class HospitalsMapPositions {
    position!: Position
    infoWindow!: InfoWindow
}