import { BinaryReader } from '@medenia/serialization';
import { BinaryWriter } from '@medenia/serialization';
import { Packet } from '../packet';
import { ClientOpCode } from '../op-codes';
import { BasePacketSerializer } from '../packet-serializer';
import { ClientPacketFactory } from '../packet-factory';

export class DialogResponsePacket implements Packet {}

class DialogResponseSerializer extends BasePacketSerializer<DialogResponsePacket> {
  constructor() {
    super(ClientOpCode.DialogResponse, DialogResponsePacket);
  }
  serialize(writer: BinaryWriter, packet: DialogResponsePacket): void {
    throw new Error('Method not implemented.');
  }
  deserialize(reader: BinaryReader, packet: DialogResponsePacket): void {
    throw new Error('Method not implemented.');
  }
}

ClientPacketFactory.register(DialogResponseSerializer);
