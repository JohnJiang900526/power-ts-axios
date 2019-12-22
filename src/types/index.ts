export type Method = 

'get' | 'GET' | 

'delete' | 'Delete' |

'post' | 'POST' |

'head' | 'HEAD' |

'options' | 'OPTIONS' |

'put' | 'PUT' |

'patch' | 'PATCH';

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
