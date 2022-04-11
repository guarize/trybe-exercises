class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo: string;

  constructor(
    brand: string,
    size: number,
    resolution: string,
    connections: string[],
    connectedTo: string,
  ) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
    this._connectedTo = connectedTo;
  }

  turnOn(): void {
    console.log(`
    Brand: ${this._brand},
    Resolution ${this._resolution},
    Size ${this._size},
    Connections ${this._connections},
    Connected to ${this._connectedTo}.`);
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(newValue: string) {
    if (this._connections.includes(newValue)) {
      this._connectedTo = newValue;
    }
  }
}

const myTv = new Tv('Samsung', 40, 'HD', ['HDMI'], 'Wi-fi');
myTv.turnOn();
myTv.connectedTo = 'HDMI';
console.log(`Connected to: ${myTv.connectedTo}`);
