export type PepecAudioUrl = `https://resource.feizhiyi.com/${string}`;

export interface PepecOption {
  index: string;
  content: string;
  translate: string;
  right: boolean;
  audio: PepecAudioUrl | "";
}

export interface PepecChoosing {
  _id: string;
  content: string[];
  content_trans: string[];
  content_audios: PepecAudioUrl[];
  options: PepecOption[];
  [string: string]: any;
}
