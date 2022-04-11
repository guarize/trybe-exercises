class Tv {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
    connectedTo: string,
  ) {
    this.brand = brand;
    this.size = size;
    this.resolution = resolution;
    this.connections = connections;
    this.connectedTo = connectedTo;
  }

  turnOn(): void {
    console.log(`
    Brand: ${this.brand},
    Resolution ${this.resolution},
    Size ${this.size},
    Connections ${this.connections},
    Connected to ${this.connectedTo}.`);
  }
}

const myTv = new Tv('Samsung', 40, 'HD', ['HDMI'], 'Wi-fi');
myTv.turnOn();
