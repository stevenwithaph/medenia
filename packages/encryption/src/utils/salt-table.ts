export const SALT_TABLE: Uint8Array[] = [
  new Uint8Array([
    0x00, 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b,
    0x0c, 0x0d, 0x0e, 0x0f, 0x10, 0x11, 0x12, 0x13, 0x14, 0x15, 0x16, 0x17,
    0x18, 0x19, 0x1a, 0x1b, 0x1c, 0x1d, 0x1e, 0x1f, 0x20, 0x21, 0x22, 0x23,
    0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f,
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b,
    0x3c, 0x3d, 0x3e, 0x3f, 0x40, 0x41, 0x42, 0x43, 0x44, 0x45, 0x46, 0x47,
    0x48, 0x49, 0x4a, 0x4b, 0x4c, 0x4d, 0x4e, 0x4f, 0x50, 0x51, 0x52, 0x53,
    0x54, 0x55, 0x56, 0x57, 0x58, 0x59, 0x5a, 0x5b, 0x5c, 0x5d, 0x5e, 0x5f,
    0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b,
    0x6c, 0x6d, 0x6e, 0x6f, 0x70, 0x71, 0x72, 0x73, 0x74, 0x75, 0x76, 0x77,
    0x78, 0x79, 0x7a, 0x7b, 0x7c, 0x7d, 0x7e, 0x7f, 0x80, 0x81, 0x82, 0x83,
    0x84, 0x85, 0x86, 0x87, 0x88, 0x89, 0x8a, 0x8b, 0x8c, 0x8d, 0x8e, 0x8f,
    0x90, 0x91, 0x92, 0x93, 0x94, 0x95, 0x96, 0x97, 0x98, 0x99, 0x9a, 0x9b,
    0x9c, 0x9d, 0x9e, 0x9f, 0xa0, 0xa1, 0xa2, 0xa3, 0xa4, 0xa5, 0xa6, 0xa7,
    0xa8, 0xa9, 0xaa, 0xab, 0xac, 0xad, 0xae, 0xaf, 0xb0, 0xb1, 0xb2, 0xb3,
    0xb4, 0xb5, 0xb6, 0xb7, 0xb8, 0xb9, 0xba, 0xbb, 0xbc, 0xbd, 0xbe, 0xbf,
    0xc0, 0xc1, 0xc2, 0xc3, 0xc4, 0xc5, 0xc6, 0xc7, 0xc8, 0xc9, 0xca, 0xcb,
    0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7,
    0xd8, 0xd9, 0xda, 0xdb, 0xdc, 0xdd, 0xde, 0xdf, 0xe0, 0xe1, 0xe2, 0xe3,
    0xe4, 0xe5, 0xe6, 0xe7, 0xe8, 0xe9, 0xea, 0xeb, 0xec, 0xed, 0xee, 0xef,
    0xf0, 0xf1, 0xf2, 0xf3, 0xf4, 0xf5, 0xf6, 0xf7, 0xf8, 0xf9, 0xfa, 0xfb,
    0xfc, 0xfd, 0xfe, 0xff,
  ]),
  new Uint8Array([
    0x80, 0x7f, 0x81, 0x7e, 0x82, 0x7d, 0x83, 0x7c, 0x84, 0x7b, 0x85, 0x7a,
    0x86, 0x79, 0x87, 0x78, 0x88, 0x77, 0x89, 0x76, 0x8a, 0x75, 0x8b, 0x74,
    0x8c, 0x73, 0x8d, 0x72, 0x8e, 0x71, 0x8f, 0x70, 0x90, 0x6f, 0x91, 0x6e,
    0x92, 0x6d, 0x93, 0x6c, 0x94, 0x6b, 0x95, 0x6a, 0x96, 0x69, 0x97, 0x68,
    0x98, 0x67, 0x99, 0x66, 0x9a, 0x65, 0x9b, 0x64, 0x9c, 0x63, 0x9d, 0x62,
    0x9e, 0x61, 0x9f, 0x60, 0xa0, 0x5f, 0xa1, 0x5e, 0xa2, 0x5d, 0xa3, 0x5c,
    0xa4, 0x5b, 0xa5, 0x5a, 0xa6, 0x59, 0xa7, 0x58, 0xa8, 0x57, 0xa9, 0x56,
    0xaa, 0x55, 0xab, 0x54, 0xac, 0x53, 0xad, 0x52, 0xae, 0x51, 0xaf, 0x50,
    0xb0, 0x4f, 0xb1, 0x4e, 0xb2, 0x4d, 0xb3, 0x4c, 0xb4, 0x4b, 0xb5, 0x4a,
    0xb6, 0x49, 0xb7, 0x48, 0xb8, 0x47, 0xb9, 0x46, 0xba, 0x45, 0xbb, 0x44,
    0xbc, 0x43, 0xbd, 0x42, 0xbe, 0x41, 0xbf, 0x40, 0xc0, 0x3f, 0xc1, 0x3e,
    0xc2, 0x3d, 0xc3, 0x3c, 0xc4, 0x3b, 0xc5, 0x3a, 0xc6, 0x39, 0xc7, 0x38,
    0xc8, 0x37, 0xc9, 0x36, 0xca, 0x35, 0xcb, 0x34, 0xcc, 0x33, 0xcd, 0x32,
    0xce, 0x31, 0xcf, 0x30, 0xd0, 0x2f, 0xd1, 0x2e, 0xd2, 0x2d, 0xd3, 0x2c,
    0xd4, 0x2b, 0xd5, 0x2a, 0xd6, 0x29, 0xd7, 0x28, 0xd8, 0x27, 0xd9, 0x26,
    0xda, 0x25, 0xdb, 0x24, 0xdc, 0x23, 0xdd, 0x22, 0xde, 0x21, 0xdf, 0x20,
    0xe0, 0x1f, 0xe1, 0x1e, 0xe2, 0x1d, 0xe3, 0x1c, 0xe4, 0x1b, 0xe5, 0x1a,
    0xe6, 0x19, 0xe7, 0x18, 0xe8, 0x17, 0xe9, 0x16, 0xea, 0x15, 0xeb, 0x14,
    0xec, 0x13, 0xed, 0x12, 0xee, 0x11, 0xef, 0x10, 0xf0, 0x0f, 0xf1, 0x0e,
    0xf2, 0x0d, 0xf3, 0x0c, 0xf4, 0x0b, 0xf5, 0x0a, 0xf6, 0x09, 0xf7, 0x08,
    0xf8, 0x07, 0xf9, 0x06, 0xfa, 0x05, 0xfb, 0x04, 0xfc, 0x03, 0xfd, 0x02,
    0xfe, 0x01, 0xff, 0x00,
  ]),
  new Uint8Array([
    0xff, 0xfe, 0xfd, 0xfc, 0xfb, 0xfa, 0xf9, 0xf8, 0xf7, 0xf6, 0xf5, 0xf4,
    0xf3, 0xf2, 0xf1, 0xf0, 0xef, 0xee, 0xed, 0xec, 0xeb, 0xea, 0xe9, 0xe8,
    0xe7, 0xe6, 0xe5, 0xe4, 0xe3, 0xe2, 0xe1, 0xe0, 0xdf, 0xde, 0xdd, 0xdc,
    0xdb, 0xda, 0xd9, 0xd8, 0xd7, 0xd6, 0xd5, 0xd4, 0xd3, 0xd2, 0xd1, 0xd0,
    0xcf, 0xce, 0xcd, 0xcc, 0xcb, 0xca, 0xc9, 0xc8, 0xc7, 0xc6, 0xc5, 0xc4,
    0xc3, 0xc2, 0xc1, 0xc0, 0xbf, 0xbe, 0xbd, 0xbc, 0xbb, 0xba, 0xb9, 0xb8,
    0xb7, 0xb6, 0xb5, 0xb4, 0xb3, 0xb2, 0xb1, 0xb0, 0xaf, 0xae, 0xad, 0xac,
    0xab, 0xaa, 0xa9, 0xa8, 0xa7, 0xa6, 0xa5, 0xa4, 0xa3, 0xa2, 0xa1, 0xa0,
    0x9f, 0x9e, 0x9d, 0x9c, 0x9b, 0x9a, 0x99, 0x98, 0x97, 0x96, 0x95, 0x94,
    0x93, 0x92, 0x91, 0x90, 0x8f, 0x8e, 0x8d, 0x8c, 0x8b, 0x8a, 0x89, 0x88,
    0x87, 0x86, 0x85, 0x84, 0x83, 0x82, 0x81, 0x80, 0x7f, 0x7e, 0x7d, 0x7c,
    0x7b, 0x7a, 0x79, 0x78, 0x77, 0x76, 0x75, 0x74, 0x73, 0x72, 0x71, 0x70,
    0x6f, 0x6e, 0x6d, 0x6c, 0x6b, 0x6a, 0x69, 0x68, 0x67, 0x66, 0x65, 0x64,
    0x63, 0x62, 0x61, 0x60, 0x5f, 0x5e, 0x5d, 0x5c, 0x5b, 0x5a, 0x59, 0x58,
    0x57, 0x56, 0x55, 0x54, 0x53, 0x52, 0x51, 0x50, 0x4f, 0x4e, 0x4d, 0x4c,
    0x4b, 0x4a, 0x49, 0x48, 0x47, 0x46, 0x45, 0x44, 0x43, 0x42, 0x41, 0x40,
    0x3f, 0x3e, 0x3d, 0x3c, 0x3b, 0x3a, 0x39, 0x38, 0x37, 0x36, 0x35, 0x34,
    0x33, 0x32, 0x31, 0x30, 0x2f, 0x2e, 0x2d, 0x2c, 0x2b, 0x2a, 0x29, 0x28,
    0x27, 0x26, 0x25, 0x24, 0x23, 0x22, 0x21, 0x20, 0x1f, 0x1e, 0x1d, 0x1c,
    0x1b, 0x1a, 0x19, 0x18, 0x17, 0x16, 0x15, 0x14, 0x13, 0x12, 0x11, 0x10,
    0x0f, 0x0e, 0x0d, 0x0c, 0x0b, 0x0a, 0x09, 0x08, 0x07, 0x06, 0x05, 0x04,
    0x03, 0x02, 0x01, 0x00,
  ]),
  new Uint8Array([
    0xff, 0x01, 0xfe, 0x02, 0xfd, 0x03, 0xfc, 0x04, 0xfb, 0x05, 0xfa, 0x06,
    0xf9, 0x07, 0xf8, 0x08, 0xf7, 0x09, 0xf6, 0x0a, 0xf5, 0x0b, 0xf4, 0x0c,
    0xf3, 0x0d, 0xf2, 0x0e, 0xf1, 0x0f, 0xf0, 0x10, 0xef, 0x11, 0xee, 0x12,
    0xed, 0x13, 0xec, 0x14, 0xeb, 0x15, 0xea, 0x16, 0xe9, 0x17, 0xe8, 0x18,
    0xe7, 0x19, 0xe6, 0x1a, 0xe5, 0x1b, 0xe4, 0x1c, 0xe3, 0x1d, 0xe2, 0x1e,
    0xe1, 0x1f, 0xe0, 0x20, 0xdf, 0x21, 0xde, 0x22, 0xdd, 0x23, 0xdc, 0x24,
    0xdb, 0x25, 0xda, 0x26, 0xd9, 0x27, 0xd8, 0x28, 0xd7, 0x29, 0xd6, 0x2a,
    0xd5, 0x2b, 0xd4, 0x2c, 0xd3, 0x2d, 0xd2, 0x2e, 0xd1, 0x2f, 0xd0, 0x30,
    0xcf, 0x31, 0xce, 0x32, 0xcd, 0x33, 0xcc, 0x34, 0xcb, 0x35, 0xca, 0x36,
    0xc9, 0x37, 0xc8, 0x38, 0xc7, 0x39, 0xc6, 0x3a, 0xc5, 0x3b, 0xc4, 0x3c,
    0xc3, 0x3d, 0xc2, 0x3e, 0xc1, 0x3f, 0xc0, 0x40, 0xbf, 0x41, 0xbe, 0x42,
    0xbd, 0x43, 0xbc, 0x44, 0xbb, 0x45, 0xba, 0x46, 0xb9, 0x47, 0xb8, 0x48,
    0xb7, 0x49, 0xb6, 0x4a, 0xb5, 0x4b, 0xb4, 0x4c, 0xb3, 0x4d, 0xb2, 0x4e,
    0xb1, 0x4f, 0xb0, 0x50, 0xaf, 0x51, 0xae, 0x52, 0xad, 0x53, 0xac, 0x54,
    0xab, 0x55, 0xaa, 0x56, 0xa9, 0x57, 0xa8, 0x58, 0xa7, 0x59, 0xa6, 0x5a,
    0xa5, 0x5b, 0xa4, 0x5c, 0xa3, 0x5d, 0xa2, 0x5e, 0xa1, 0x5f, 0xa0, 0x60,
    0x9f, 0x61, 0x9e, 0x62, 0x9d, 0x63, 0x9c, 0x64, 0x9b, 0x65, 0x9a, 0x66,
    0x99, 0x67, 0x98, 0x68, 0x97, 0x69, 0x96, 0x6a, 0x95, 0x6b, 0x94, 0x6c,
    0x93, 0x6d, 0x92, 0x6e, 0x91, 0x6f, 0x90, 0x70, 0x8f, 0x71, 0x8e, 0x72,
    0x8d, 0x73, 0x8c, 0x74, 0x8b, 0x75, 0x8a, 0x76, 0x89, 0x77, 0x88, 0x78,
    0x87, 0x79, 0x86, 0x7a, 0x85, 0x7b, 0x84, 0x7c, 0x83, 0x7d, 0x82, 0x7e,
    0x81, 0x7f, 0x80, 0x80,
  ]),
  new Uint8Array([
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x00, 0x00, 0x00, 0x00, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01,
    0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x01, 0x04, 0x04, 0x04, 0x04,
    0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04, 0x04,
    0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09, 0x09,
    0x09, 0x09, 0x09, 0x09, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x19, 0x19, 0x19, 0x19,
    0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19, 0x19,
    0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24, 0x24,
    0x24, 0x24, 0x24, 0x24, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31,
    0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x31, 0x40, 0x40, 0x40, 0x40,
    0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40, 0x40,
    0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51, 0x51,
    0x51, 0x51, 0x51, 0x51, 0x64, 0x64, 0x64, 0x64, 0x64, 0x64, 0x64, 0x64,
    0x64, 0x64, 0x64, 0x64, 0x64, 0x64, 0x64, 0x64, 0x79, 0x79, 0x79, 0x79,
    0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79, 0x79,
    0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90, 0x90,
    0x90, 0x90, 0x90, 0x90, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9,
    0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xa9, 0xc4, 0xc4, 0xc4, 0xc4,
    0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4, 0xc4,
    0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1, 0xe1,
    0xe1, 0xe1, 0xe1, 0xe1,
  ]),
  new Uint8Array([
    0x00, 0x02, 0x04, 0x06, 0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16,
    0x18, 0x1a, 0x1c, 0x1e, 0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e,
    0x30, 0x32, 0x34, 0x36, 0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46,
    0x48, 0x4a, 0x4c, 0x4e, 0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e,
    0x60, 0x62, 0x64, 0x66, 0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76,
    0x78, 0x7a, 0x7c, 0x7e, 0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e,
    0x90, 0x92, 0x94, 0x96, 0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6,
    0xa8, 0xaa, 0xac, 0xae, 0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe,
    0xc0, 0xc2, 0xc4, 0xc6, 0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6,
    0xd8, 0xda, 0xdc, 0xde, 0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee,
    0xf0, 0xf2, 0xf4, 0xf6, 0xf8, 0xfa, 0xfc, 0xfe, 0x00, 0x02, 0x04, 0x06,
    0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1c, 0x1e,
    0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e, 0x30, 0x32, 0x34, 0x36,
    0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46, 0x48, 0x4a, 0x4c, 0x4e,
    0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e, 0x60, 0x62, 0x64, 0x66,
    0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76, 0x78, 0x7a, 0x7c, 0x7e,
    0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e, 0x90, 0x92, 0x94, 0x96,
    0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6, 0xa8, 0xaa, 0xac, 0xae,
    0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe, 0xc0, 0xc2, 0xc4, 0xc6,
    0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6, 0xd8, 0xda, 0xdc, 0xde,
    0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee, 0xf0, 0xf2, 0xf4, 0xf6,
    0xf8, 0xfa, 0xfc, 0xfe,
  ]),
  new Uint8Array([
    0xff, 0xfd, 0xfb, 0xf9, 0xf7, 0xf5, 0xf3, 0xf1, 0xef, 0xed, 0xeb, 0xe9,
    0xe7, 0xe5, 0xe3, 0xe1, 0xdf, 0xdd, 0xdb, 0xd9, 0xd7, 0xd5, 0xd3, 0xd1,
    0xcf, 0xcd, 0xcb, 0xc9, 0xc7, 0xc5, 0xc3, 0xc1, 0xbf, 0xbd, 0xbb, 0xb9,
    0xb7, 0xb5, 0xb3, 0xb1, 0xaf, 0xad, 0xab, 0xa9, 0xa7, 0xa5, 0xa3, 0xa1,
    0x9f, 0x9d, 0x9b, 0x99, 0x97, 0x95, 0x93, 0x91, 0x8f, 0x8d, 0x8b, 0x89,
    0x87, 0x85, 0x83, 0x81, 0x7f, 0x7d, 0x7b, 0x79, 0x77, 0x75, 0x73, 0x71,
    0x6f, 0x6d, 0x6b, 0x69, 0x67, 0x65, 0x63, 0x61, 0x5f, 0x5d, 0x5b, 0x59,
    0x57, 0x55, 0x53, 0x51, 0x4f, 0x4d, 0x4b, 0x49, 0x47, 0x45, 0x43, 0x41,
    0x3f, 0x3d, 0x3b, 0x39, 0x37, 0x35, 0x33, 0x31, 0x2f, 0x2d, 0x2b, 0x29,
    0x27, 0x25, 0x23, 0x21, 0x1f, 0x1d, 0x1b, 0x19, 0x17, 0x15, 0x13, 0x11,
    0x0f, 0x0d, 0x0b, 0x09, 0x07, 0x05, 0x03, 0x01, 0xff, 0xfd, 0xfb, 0xf9,
    0xf7, 0xf5, 0xf3, 0xf1, 0xef, 0xed, 0xeb, 0xe9, 0xe7, 0xe5, 0xe3, 0xe1,
    0xdf, 0xdd, 0xdb, 0xd9, 0xd7, 0xd5, 0xd3, 0xd1, 0xcf, 0xcd, 0xcb, 0xc9,
    0xc7, 0xc5, 0xc3, 0xc1, 0xbf, 0xbd, 0xbb, 0xb9, 0xb7, 0xb5, 0xb3, 0xb1,
    0xaf, 0xad, 0xab, 0xa9, 0xa7, 0xa5, 0xa3, 0xa1, 0x9f, 0x9d, 0x9b, 0x99,
    0x97, 0x95, 0x93, 0x91, 0x8f, 0x8d, 0x8b, 0x89, 0x87, 0x85, 0x83, 0x81,
    0x7f, 0x7d, 0x7b, 0x79, 0x77, 0x75, 0x73, 0x71, 0x6f, 0x6d, 0x6b, 0x69,
    0x67, 0x65, 0x63, 0x61, 0x5f, 0x5d, 0x5b, 0x59, 0x57, 0x55, 0x53, 0x51,
    0x4f, 0x4d, 0x4b, 0x49, 0x47, 0x45, 0x43, 0x41, 0x3f, 0x3d, 0x3b, 0x39,
    0x37, 0x35, 0x33, 0x31, 0x2f, 0x2d, 0x2b, 0x29, 0x27, 0x25, 0x23, 0x21,
    0x1f, 0x1d, 0x1b, 0x19, 0x17, 0x15, 0x13, 0x11, 0x0f, 0x0d, 0x0b, 0x09,
    0x07, 0x05, 0x03, 0x01,
  ]),
  new Uint8Array([
    0xff, 0xfd, 0xfb, 0xf9, 0xf7, 0xf5, 0xf3, 0xf1, 0xef, 0xed, 0xeb, 0xe9,
    0xe7, 0xe5, 0xe3, 0xe1, 0xdf, 0xdd, 0xdb, 0xd9, 0xd7, 0xd5, 0xd3, 0xd1,
    0xcf, 0xcd, 0xcb, 0xc9, 0xc7, 0xc5, 0xc3, 0xc1, 0xbf, 0xbd, 0xbb, 0xb9,
    0xb7, 0xb5, 0xb3, 0xb1, 0xaf, 0xad, 0xab, 0xa9, 0xa7, 0xa5, 0xa3, 0xa1,
    0x9f, 0x9d, 0x9b, 0x99, 0x97, 0x95, 0x93, 0x91, 0x8f, 0x8d, 0x8b, 0x89,
    0x87, 0x85, 0x83, 0x81, 0x7f, 0x7d, 0x7b, 0x79, 0x77, 0x75, 0x73, 0x71,
    0x6f, 0x6d, 0x6b, 0x69, 0x67, 0x65, 0x63, 0x61, 0x5f, 0x5d, 0x5b, 0x59,
    0x57, 0x55, 0x53, 0x51, 0x4f, 0x4d, 0x4b, 0x49, 0x47, 0x45, 0x43, 0x41,
    0x3f, 0x3d, 0x3b, 0x39, 0x37, 0x35, 0x33, 0x31, 0x2f, 0x2d, 0x2b, 0x29,
    0x27, 0x25, 0x23, 0x21, 0x1f, 0x1d, 0x1b, 0x19, 0x17, 0x15, 0x13, 0x11,
    0x0f, 0x0d, 0x0b, 0x09, 0x07, 0x05, 0x03, 0x01, 0x00, 0x02, 0x04, 0x06,
    0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1c, 0x1e,
    0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e, 0x30, 0x32, 0x34, 0x36,
    0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46, 0x48, 0x4a, 0x4c, 0x4e,
    0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e, 0x60, 0x62, 0x64, 0x66,
    0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76, 0x78, 0x7a, 0x7c, 0x7e,
    0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e, 0x90, 0x92, 0x94, 0x96,
    0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6, 0xa8, 0xaa, 0xac, 0xae,
    0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe, 0xc0, 0xc2, 0xc4, 0xc6,
    0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6, 0xd8, 0xda, 0xdc, 0xde,
    0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee, 0xf0, 0xf2, 0xf4, 0xf6,
    0xf8, 0xfa, 0xfc, 0xfe,
  ]),
  new Uint8Array([
    0x00, 0x02, 0x04, 0x06, 0x08, 0x0a, 0x0c, 0x0e, 0x10, 0x12, 0x14, 0x16,
    0x18, 0x1a, 0x1c, 0x1e, 0x20, 0x22, 0x24, 0x26, 0x28, 0x2a, 0x2c, 0x2e,
    0x30, 0x32, 0x34, 0x36, 0x38, 0x3a, 0x3c, 0x3e, 0x40, 0x42, 0x44, 0x46,
    0x48, 0x4a, 0x4c, 0x4e, 0x50, 0x52, 0x54, 0x56, 0x58, 0x5a, 0x5c, 0x5e,
    0x60, 0x62, 0x64, 0x66, 0x68, 0x6a, 0x6c, 0x6e, 0x70, 0x72, 0x74, 0x76,
    0x78, 0x7a, 0x7c, 0x7e, 0x80, 0x82, 0x84, 0x86, 0x88, 0x8a, 0x8c, 0x8e,
    0x90, 0x92, 0x94, 0x96, 0x98, 0x9a, 0x9c, 0x9e, 0xa0, 0xa2, 0xa4, 0xa6,
    0xa8, 0xaa, 0xac, 0xae, 0xb0, 0xb2, 0xb4, 0xb6, 0xb8, 0xba, 0xbc, 0xbe,
    0xc0, 0xc2, 0xc4, 0xc6, 0xc8, 0xca, 0xcc, 0xce, 0xd0, 0xd2, 0xd4, 0xd6,
    0xd8, 0xda, 0xdc, 0xde, 0xe0, 0xe2, 0xe4, 0xe6, 0xe8, 0xea, 0xec, 0xee,
    0xf0, 0xf2, 0xf4, 0xf6, 0xf8, 0xfa, 0xfc, 0xfe, 0xff, 0xfd, 0xfb, 0xf9,
    0xf7, 0xf5, 0xf3, 0xf1, 0xef, 0xed, 0xeb, 0xe9, 0xe7, 0xe5, 0xe3, 0xe1,
    0xdf, 0xdd, 0xdb, 0xd9, 0xd7, 0xd5, 0xd3, 0xd1, 0xcf, 0xcd, 0xcb, 0xc9,
    0xc7, 0xc5, 0xc3, 0xc1, 0xbf, 0xbd, 0xbb, 0xb9, 0xb7, 0xb5, 0xb3, 0xb1,
    0xaf, 0xad, 0xab, 0xa9, 0xa7, 0xa5, 0xa3, 0xa1, 0x9f, 0x9d, 0x9b, 0x99,
    0x97, 0x95, 0x93, 0x91, 0x8f, 0x8d, 0x8b, 0x89, 0x87, 0x85, 0x83, 0x81,
    0x7f, 0x7d, 0x7b, 0x79, 0x77, 0x75, 0x73, 0x71, 0x6f, 0x6d, 0x6b, 0x69,
    0x67, 0x65, 0x63, 0x61, 0x5f, 0x5d, 0x5b, 0x59, 0x57, 0x55, 0x53, 0x51,
    0x4f, 0x4d, 0x4b, 0x49, 0x47, 0x45, 0x43, 0x41, 0x3f, 0x3d, 0x3b, 0x39,
    0x37, 0x35, 0x33, 0x31, 0x2f, 0x2d, 0x2b, 0x29, 0x27, 0x25, 0x23, 0x21,
    0x1f, 0x1d, 0x1b, 0x19, 0x17, 0x15, 0x13, 0x11, 0x0f, 0x0d, 0x0b, 0x09,
    0x07, 0x05, 0x03, 0x01,
  ]),
  new Uint8Array([
    0xff, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x1e, 0x3b, 0x3b, 0x3b,
    0x3b, 0x3b, 0x3b, 0x3b, 0x3b, 0x56, 0x56, 0x56, 0x56, 0x56, 0x56, 0x56,
    0x56, 0x6f, 0x6f, 0x6f, 0x6f, 0x6f, 0x6f, 0x6f, 0x6f, 0x86, 0x86, 0x86,
    0x86, 0x86, 0x86, 0x86, 0x86, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b,
    0x9b, 0xae, 0xae, 0xae, 0xae, 0xae, 0xae, 0xae, 0xae, 0xbf, 0xbf, 0xbf,
    0xbf, 0xbf, 0xbf, 0xbf, 0xbf, 0xce, 0xce, 0xce, 0xce, 0xce, 0xce, 0xce,
    0xce, 0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xdb, 0xe6, 0xe6, 0xe6,
    0xe6, 0xe6, 0xe6, 0xe6, 0xe6, 0xef, 0xef, 0xef, 0xef, 0xef, 0xef, 0xef,
    0xef, 0xf6, 0xf6, 0xf6, 0xf6, 0xf6, 0xf6, 0xf6, 0xf6, 0xfb, 0xfb, 0xfb,
    0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe,
    0xfe, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff, 0xff,
    0xff, 0xff, 0xff, 0xff, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe, 0xfe,
    0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xfb, 0xf6, 0xf6, 0xf6, 0xf6,
    0xf6, 0xf6, 0xf6, 0xf6, 0xef, 0xef, 0xef, 0xef, 0xef, 0xef, 0xef, 0xef,
    0xe6, 0xe6, 0xe6, 0xe6, 0xe6, 0xe6, 0xe6, 0xe6, 0xdb, 0xdb, 0xdb, 0xdb,
    0xdb, 0xdb, 0xdb, 0xdb, 0xce, 0xce, 0xce, 0xce, 0xce, 0xce, 0xce, 0xce,
    0xbf, 0xbf, 0xbf, 0xbf, 0xbf, 0xbf, 0xbf, 0xbf, 0xae, 0xae, 0xae, 0xae,
    0xae, 0xae, 0xae, 0xae, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b, 0x9b,
    0x86, 0x86, 0x86, 0x86, 0x86, 0x86, 0x86, 0x86, 0x6f, 0x6f, 0x6f, 0x6f,
    0x6f, 0x6f, 0x6f, 0x6f, 0x56, 0x56, 0x56, 0x56, 0x56, 0x56, 0x56, 0x56,
    0x3b, 0x3b, 0x3b, 0x3b, 0x3b, 0x3b, 0x3b, 0x3b, 0x1e, 0x1e, 0x1e, 0x1e,
    0x1e, 0x1e, 0x1e, 0x1e,
  ]),
];
