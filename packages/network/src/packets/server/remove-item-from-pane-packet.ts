import { BinaryReader } from '@medenia/serialization';
import { BinaryWriter } from '@medenia/serialization';
import { Packet } from '../packet';
import { ServerOpCode } from '../op-codes';
import { BasePacketSerializer } from '../packet-serializer';
import { ServerPacketFactory } from '../packet-factory';

export class RemoveItemFromPanePacket implements Packet {}

class RemoveItemFromPaneSerializer extends BasePacketSerializer<RemoveItemFromPanePacket> {
  constructor() {
    super(ServerOpCode.RemoveItemFromPane, RemoveItemFromPanePacket);
  }

  serialize(writer: BinaryWriter, packet: RemoveItemFromPanePacket) {
    throw new Error('Method not implemented.');
  }

  deserialize(reader: BinaryReader, packet: RemoveItemFromPanePacket) {
    throw new Error('Method not implemented.');
  }
}

ServerPacketFactory.register(RemoveItemFromPaneSerializer);
