(self.webpackChunknami_wallet=self.webpackChunknami_wallet||[]).push([[872],{44872:(t,e,r)=>{"use strict";r.r(e),r.d(e,{AlgorithmId:()=>_.f3,BigNum:()=>_.Wb,CBORArray:()=>_.lz,CBORObject:()=>_.Vd,CBORSpecial:()=>_.Bk,CBORSpecialType:()=>_.H0,CBORValue:()=>_.Jz,CBORValueKind:()=>_.T8,COSEEncrypt:()=>_.dc,COSEEncrypt0:()=>_.rK,COSEKey:()=>_.VU,COSERecipient:()=>_.XO,COSERecipients:()=>_.Od,COSESign:()=>_.eA,COSESign1:()=>_.Ej,COSESign1Builder:()=>_.DZ,COSESignBuilder:()=>_.Yk,COSESignature:()=>_.Rm,COSESignatures:()=>_.Ts,CounterSignature:()=>_.Fb,CurveType:()=>_.v7,ECKey:()=>_.dY,EdDSA25519Key:()=>_.V3,HeaderMap:()=>_.BF,Headers:()=>_.PM,Int:()=>_.J7,KeyOperation:()=>_.b1,KeyType:()=>_.Yh,Label:()=>_.__,LabelKind:()=>_.$E,Labels:()=>_.Rz,PasswordEncryption:()=>_.q$,ProtectedHeaderMap:()=>_.UP,PubKeyEncryption:()=>_.zS,SigContext:()=>_.UA,SigStructure:()=>_.ek,SignedMessage:()=>_.uk,SignedMessageKind:()=>_.Ww,TaggedCBOR:()=>_.t1,__wbindgen_debug_string:()=>_.fY,__wbindgen_object_drop_ref:()=>_.ug,__wbindgen_rethrow:()=>_.nD,__wbindgen_string_new:()=>_.h4,__wbindgen_throw:()=>_.Or});var _=r(4357)},4357:(t,e,r)=>{"use strict";r.d(e,{$E:()=>j,Ww:()=>S,UA:()=>C,H0:()=>E,T8:()=>x,f3:()=>B,Yh:()=>z,dY:()=>T,v7:()=>K,b1:()=>A,Wb:()=>D,lz:()=>P,Vd:()=>R,Bk:()=>I,Jz:()=>U,dc:()=>V,rK:()=>$,VU:()=>Y,XO:()=>F,Od:()=>N,eA:()=>X,Ej:()=>M,DZ:()=>W,Yk:()=>H,Rm:()=>J,Ts:()=>q,Fb:()=>G,V3:()=>L,BF:()=>Z,PM:()=>Q,J7:()=>tt,__:()=>et,Rz:()=>rt,q$:()=>_t,UP:()=>nt,zS:()=>st,ek:()=>at,uk:()=>it,t1:()=>ot,ug:()=>ct,h4:()=>pt,fY:()=>dt,Or:()=>wt,nD:()=>bt});var _=r(82677);t=r.hmd(t);const n=new Array(32).fill(void 0);function s(t){return n[t]}n.push(void 0,null,!0,!1);let a=n.length;function i(t){const e=s(t);return function(t){t<36||(n[t]=a,a=t)}(t),e}let o=new("undefined"==typeof TextDecoder?(0,t.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});o.decode();let c=null;function p(){return null!==c&&c.buffer===_.memory.buffer||(c=new Uint8Array(_.memory.buffer)),c}function d(t,e){return o.decode(p().subarray(t,t+e))}function w(t){const e=typeof t;if("number"==e||"boolean"==e||null==t)return`${t}`;if("string"==e)return`"${t}"`;if("symbol"==e){const e=t.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=t.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(t)){const e=t.length;let r="[";e>0&&(r+=w(t[0]));for(let _=1;_<e;_++)r+=", "+w(t[_]);return r+="]",r}const r=/\[object ([^\]]+)\]/.exec(toString.call(t));let _;if(!(r.length>1))return toString.call(t);if(_=r[1],"Object"==_)try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?`${t.name}: ${t.message}\n${t.stack}`:_}let b=0;let l=new("undefined"==typeof TextEncoder?(0,t.require)("util").TextEncoder:TextEncoder)("utf-8");const u="function"==typeof l.encodeInto?function(t,e){return l.encodeInto(t,e)}:function(t,e){const r=l.encode(t);return e.set(r),{read:t.length,written:r.length}};function y(t,e,r){if(void 0===r){const r=l.encode(t),_=e(r.length);return p().subarray(_,_+r.length).set(r),b=r.length,_}let _=t.length,n=e(_);const s=p();let a=0;for(;a<_;a++){const e=t.charCodeAt(a);if(e>127)break;s[n+a]=e}if(a!==_){0!==a&&(t=t.slice(a)),n=r(n,_,_=a+3*t.length);const e=p().subarray(n+a,n+_);a+=u(t,e).written}return b=a,n}let g=null;function h(){return null!==g&&g.buffer===_.memory.buffer||(g=new Int32Array(_.memory.buffer)),g}function f(t,e){return p().subarray(t/1,t/1+e)}function v(t,e){const r=e(1*t.length);return p().set(t,r/1),b=t.length,r}function m(t,e){if(!(t instanceof e))throw new Error(`expected instance of ${e.name}`);return t.ptr}function k(t){return null==t}let O=null;const j=Object.freeze({Int:0,0:"Int",Text:1,1:"Text"}),S=Object.freeze({COSESIGN:0,0:"COSESIGN",COSESIGN1:1,1:"COSESIGN1"}),C=Object.freeze({Signature:0,0:"Signature",Signature1:1,1:"Signature1",CounterSignature:2,2:"CounterSignature"}),E=Object.freeze({Bool:0,0:"Bool",Float:1,1:"Float",Unassigned:2,2:"Unassigned",Break:3,3:"Break",Undefined:4,4:"Undefined",Null:5,5:"Null"}),x=Object.freeze({Int:0,0:"Int",Bytes:1,1:"Bytes",Text:2,2:"Text",Array:3,3:"Array",Object:4,4:"Object",TaggedCBOR:5,5:"TaggedCBOR",Special:6,6:"Special"}),B=Object.freeze({EdDSA:0,0:"EdDSA",ChaCha20Poly1305:1,1:"ChaCha20Poly1305"}),z=Object.freeze({OKP:0,0:"OKP",EC2:1,1:"EC2",Symmetric:2,2:"Symmetric"}),T=Object.freeze({CRV:0,0:"CRV",X:1,1:"X",Y:2,2:"Y",D:3,3:"D"}),K=Object.freeze({P256:0,0:"P256",P384:1,1:"P384",P521:2,2:"P521",X25519:3,3:"X25519",X448:4,4:"X448",Ed25519:5,5:"Ed25519",Ed448:6,6:"Ed448"}),A=Object.freeze({Sign:0,0:"Sign",Verify:1,1:"Verify",Encrypt:2,2:"Encrypt",Decrypt:3,3:"Decrypt",WrapKey:4,4:"WrapKey",UnwrapKey:5,5:"UnwrapKey",DeriveKey:6,6:"DeriveKey",DeriveBits:7,7:"DeriveBits"});class D{static __wrap(t){const e=Object.create(D.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_bignum_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.bignum_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.bignum_from_bytes(e,r);return D.__wrap(n)}static from_str(t){var e=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),r=b,n=_.bignum_from_str(e,r);return D.__wrap(n)}to_str(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.bignum_to_str(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];return d(t,e)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,e)}}checked_mul(t){m(t,D);var e=_.bignum_checked_mul(this.ptr,t.ptr);return D.__wrap(e)}checked_add(t){m(t,D);var e=_.bignum_checked_add(this.ptr,t.ptr);return D.__wrap(e)}checked_sub(t){m(t,D);var e=_.bignum_checked_sub(this.ptr,t.ptr);return D.__wrap(e)}}class P{static __wrap(t){const e=Object.create(P.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborarray_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborarray_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cborarray_from_bytes(e,r);return P.__wrap(n)}static new(){var t=_.cborarray_new();return P.__wrap(t)}len(){return _.cborarray_len(this.ptr)>>>0}get(t){var e=_.cborarray_get(this.ptr,t);return U.__wrap(e)}add(t){m(t,U),_.cborarray_add(this.ptr,t.ptr)}set_definite_encoding(t){_.cborarray_set_definite_encoding(this.ptr,t)}is_definite(){return 0!==_.cborarray_is_definite(this.ptr)}}class R{static __wrap(t){const e=Object.create(R.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborobject_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborobject_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cborobject_from_bytes(e,r);return R.__wrap(n)}static new(){var t=_.cborobject_new();return R.__wrap(t)}len(){return _.cborobject_len(this.ptr)>>>0}insert(t,e){m(t,U),m(e,U);var r=_.cborobject_insert(this.ptr,t.ptr,e.ptr);return 0===r?void 0:U.__wrap(r)}get(t){m(t,U);var e=_.cborobject_get(this.ptr,t.ptr);return 0===e?void 0:U.__wrap(e)}keys(){var t=_.cborobject_keys(this.ptr);return P.__wrap(t)}set_definite_encoding(t){_.cborobject_set_definite_encoding(this.ptr,t)}is_definite(){return 0!==_.cborobject_is_definite(this.ptr)}}class I{static __wrap(t){const e=Object.create(I.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborspecial_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborspecial_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cborspecial_from_bytes(e,r);return I.__wrap(n)}static new_bool(t){var e=_.cborspecial_new_bool(t);return I.__wrap(e)}static new_unassigned(t){var e=_.cborspecial_new_unassigned(t);return I.__wrap(e)}static new_break(){var t=_.cborspecial_new_break();return I.__wrap(t)}static new_null(){var t=_.cborspecial_new_null();return I.__wrap(t)}static new_undefined(){var t=_.cborspecial_new_undefined();return I.__wrap(t)}kind(){return _.cborspecial_kind(this.ptr)>>>0}as_bool(){var t=_.cborspecial_as_bool(this.ptr);return 16777215===t?void 0:0!==t}as_float(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cborspecial_as_float(r,this.ptr);var t=h()[r/4+0],e=(null!==O&&O.buffer===_.memory.buffer||(O=new Float64Array(_.memory.buffer)),O)[r/8+1];return 0===t?void 0:e}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_unassigned(){var t=_.cborspecial_as_unassigned(this.ptr);return 16777215===t?void 0:t}}class U{static __wrap(t){const e=Object.create(U.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cborvalue_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cborvalue_from_bytes(e,r);return U.__wrap(n)}static new_int(t){m(t,tt);var e=_.cborvalue_new_int(t.ptr);return U.__wrap(e)}static new_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cborvalue_new_bytes(e,r);return U.__wrap(n)}static new_text(t){var e=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),r=b,n=_.cborvalue_new_text(e,r);return U.__wrap(n)}static new_array(t){m(t,P);var e=_.cborvalue_new_array(t.ptr);return U.__wrap(e)}static new_object(t){m(t,R);var e=_.cborvalue_new_object(t.ptr);return U.__wrap(e)}static new_tagged(t){m(t,ot);var e=_.cborvalue_new_tagged(t.ptr);return U.__wrap(e)}static new_special(t){m(t,I);var e=_.cborvalue_new_special(t.ptr);return U.__wrap(e)}kind(){return _.cborvalue_kind(this.ptr)>>>0}as_int(){var t=_.cborvalue_as_int(this.ptr);return 0===t?void 0:tt.__wrap(t)}as_bytes(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_as_bytes(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_text(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cborvalue_as_text(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=d(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}as_array(){var t=_.cborvalue_as_array(this.ptr);return 0===t?void 0:P.__wrap(t)}as_object(){var t=_.cborvalue_as_object(this.ptr);return 0===t?void 0:R.__wrap(t)}as_tagged(){var t=_.cborvalue_as_tagged(this.ptr);return 0===t?void 0:ot.__wrap(t)}as_special(){var t=_.cborvalue_as_special(this.ptr);return 0===t?void 0:I.__wrap(t)}}class V{static __wrap(t){const e=Object.create(V.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coseencrypt_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.coseencrypt_from_bytes(e,r);return V.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}recipients(){var t=_.coseencrypt_recipients(this.ptr);return N.__wrap(t)}static new(t,e,r){m(t,Q);var n=k(e)?0:v(e,_.__wbindgen_malloc),s=b;m(r,N);var a=_.coseencrypt_new(t.ptr,n,s,r.ptr);return V.__wrap(a)}}class ${static __wrap(t){const e=Object.create($.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coseencrypt0_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.coseencrypt0_from_bytes(e,r);return $.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,e){m(t,Q);var r=k(e)?0:v(e,_.__wbindgen_malloc),n=b,s=_.coseencrypt0_new(t.ptr,r,n);return $.__wrap(s)}}class Y{static __wrap(t){const e=Object.create(Y.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosekey_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosekey_from_bytes(e,r);return Y.__wrap(n)}set_key_type(t){m(t,et),_.cosekey_set_key_type(this.ptr,t.ptr)}key_type(){var t=_.cosekey_key_type(this.ptr);return et.__wrap(t)}set_key_id(t){var e=v(t,_.__wbindgen_malloc),r=b;_.cosekey_set_key_id(this.ptr,e,r)}key_id(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_key_id(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_algorithm_id(t){m(t,et),_.cosekey_set_algorithm_id(this.ptr,t.ptr)}algorithm_id(){var t=_.cosekey_algorithm_id(this.ptr);return 0===t?void 0:et.__wrap(t)}set_key_ops(t){m(t,rt),_.cosekey_set_key_ops(this.ptr,t.ptr)}key_ops(){var t=_.cosekey_key_ops(this.ptr);return 0===t?void 0:rt.__wrap(t)}set_base_init_vector(t){var e=v(t,_.__wbindgen_malloc),r=b;_.cosekey_set_base_init_vector(this.ptr,e,r)}base_init_vector(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_base_init_vector(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}header(t){m(t,et);var e=_.cosekey_header(this.ptr,t.ptr);return 0===e?void 0:U.__wrap(e)}set_header(t,e){m(t,et),m(e,U),_.cosekey_set_header(this.ptr,t.ptr,e.ptr)}static new(t){m(t,et);var e=_.cosekey_new(t.ptr);return Y.__wrap(e)}}class F{static __wrap(t){const e=Object.create(F.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coserecipient_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coserecipient_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.coserecipient_from_bytes(e,r);return F.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}ciphertext(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,e){m(t,Q);var r=k(e)?0:v(e,_.__wbindgen_malloc),n=b,s=_.coseencrypt0_new(t.ptr,r,n);return F.__wrap(s)}}class N{static __wrap(t){const e=Object.create(N.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_coserecipients_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.coserecipients_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.coserecipients_from_bytes(e,r);return N.__wrap(n)}static new(){var t=_.coserecipients_new();return N.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var e=_.coserecipients_get(this.ptr,t);return F.__wrap(e)}add(t){m(t,F),_.coserecipients_add(this.ptr,t.ptr)}}class X{static __wrap(t){const e=Object.create(X.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosesign_from_bytes(e,r);return X.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}payload(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}signatures(){var t=_.cosesign_signatures(this.ptr);return q.__wrap(t)}static new(t,e,r){m(t,Q);var n=k(e)?0:v(e,_.__wbindgen_malloc),s=b;m(r,q);var a=_.cosesign_new(t.ptr,n,s,r.ptr);return X.__wrap(a)}}class M{static __wrap(t){const e=Object.create(M.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign1_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign1_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosesign1_from_bytes(e,r);return M.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}payload(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.coseencrypt0_ciphertext(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}signature(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesign1_signature(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}signed_data(t,e){var r=k(t)?0:v(t,_.__wbindgen_malloc),n=b,s=k(e)?0:v(e,_.__wbindgen_malloc),a=b,i=_.cosesign1_signed_data(this.ptr,r,n,s,a);return at.__wrap(i)}static new(t,e,r){m(t,Q);var n=k(e)?0:v(e,_.__wbindgen_malloc),s=b,a=v(r,_.__wbindgen_malloc),i=b,o=_.cosesign1_new(t.ptr,n,s,a,i);return M.__wrap(o)}}class W{static __wrap(t){const e=Object.create(W.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesign1builder_free(t)}static new(t,e,r){m(t,Q);var n=v(e,_.__wbindgen_malloc),s=b,a=_.cosesign1builder_new(t.ptr,n,s,r);return W.__wrap(a)}hash_payload(){_.cosesign1builder_hash_payload(this.ptr)}set_external_aad(t){var e=v(t,_.__wbindgen_malloc),r=b;_.cosesign1builder_set_external_aad(this.ptr,e,r)}make_data_to_sign(){var t=_.cosesign1builder_make_data_to_sign(this.ptr);return at.__wrap(t)}build(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosesign1builder_build(this.ptr,e,r);return M.__wrap(n)}}class H{static __wrap(t){const e=Object.create(H.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignbuilder_free(t)}static new(t,e,r){m(t,Q);var n=v(e,_.__wbindgen_malloc),s=b,a=_.cosesignbuilder_new(t.ptr,n,s,r);return H.__wrap(a)}hash_payload(){_.cosesign1builder_hash_payload(this.ptr)}set_external_aad(t){var e=v(t,_.__wbindgen_malloc),r=b;_.cosesign1builder_set_external_aad(this.ptr,e,r)}make_data_to_sign(){var t=_.cosesignbuilder_make_data_to_sign(this.ptr);return at.__wrap(t)}build(t){m(t,q);var e=_.cosesignbuilder_build(this.ptr,t.ptr);return X.__wrap(e)}}class J{static __wrap(t){const e=Object.create(J.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignature_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignature_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosesignature_from_bytes(e,r);return J.__wrap(n)}headers(){var t=_.coseencrypt0_headers(this.ptr);return Q.__wrap(t)}signature(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignature_signature(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static new(t,e){m(t,Q);var r=v(e,_.__wbindgen_malloc),n=b,s=_.cosesignature_new(t.ptr,r,n);return J.__wrap(s)}}class q{static __wrap(t){const e=Object.create(q.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_cosesignatures_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.cosesignatures_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.cosesignatures_from_bytes(e,r);return q.__wrap(n)}static new(){var t=_.coserecipients_new();return q.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var e=_.cosesignatures_get(this.ptr,t);return J.__wrap(e)}add(t){m(t,J),_.cosesignatures_add(this.ptr,t.ptr)}}class G{static __wrap(t){const e=Object.create(G.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_countersignature_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.countersignature_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.countersignature_from_bytes(e,r);return G.__wrap(n)}static new_single(t){m(t,J);var e=_.countersignature_new_single(t.ptr);return G.__wrap(e)}static new_multi(t){m(t,q);var e=_.countersignature_new_multi(t.ptr);return G.__wrap(e)}signatures(){var t=_.countersignature_signatures(this.ptr);return q.__wrap(t)}}class L{static __wrap(t){const e=Object.create(L.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_eddsa25519key_free(t)}static new(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.eddsa25519key_new(e,r);return L.__wrap(n)}set_private_key(t){var e=v(t,_.__wbindgen_malloc),r=b;_.eddsa25519key_set_private_key(this.ptr,e,r)}is_for_signing(){_.eddsa25519key_is_for_signing(this.ptr)}is_for_verifying(){_.eddsa25519key_is_for_verifying(this.ptr)}build(){var t=_.eddsa25519key_build(this.ptr);return Y.__wrap(t)}}class Z{static __wrap(t){const e=Object.create(Z.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_headermap_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.headermap_from_bytes(e,r);return Z.__wrap(n)}set_algorithm_id(t){m(t,et),_.headermap_set_algorithm_id(this.ptr,t.ptr)}algorithm_id(){var t=_.headermap_algorithm_id(this.ptr);return 0===t?void 0:et.__wrap(t)}set_criticality(t){m(t,rt),_.headermap_set_criticality(this.ptr,t.ptr)}criticality(){var t=_.headermap_criticality(this.ptr);return 0===t?void 0:rt.__wrap(t)}set_content_type(t){m(t,et),_.cosekey_set_algorithm_id(this.ptr,t.ptr)}content_type(){var t=_.cosekey_algorithm_id(this.ptr);return 0===t?void 0:et.__wrap(t)}set_key_id(t){var e=v(t,_.__wbindgen_malloc),r=b;_.headermap_set_key_id(this.ptr,e,r)}key_id(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_key_id(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_init_vector(t){var e=v(t,_.__wbindgen_malloc),r=b;_.cosekey_set_base_init_vector(this.ptr,e,r)}init_vector(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.cosekey_base_init_vector(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_partial_init_vector(t){var e=v(t,_.__wbindgen_malloc),r=b;_.headermap_set_partial_init_vector(this.ptr,e,r)}partial_init_vector(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.headermap_partial_init_vector(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=f(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_counter_signature(t){m(t,G),_.headermap_set_counter_signature(this.ptr,t.ptr)}counter_signature(){var t=_.headermap_counter_signature(this.ptr);return 0===t?void 0:G.__wrap(t)}header(t){m(t,et);var e=_.headermap_header(this.ptr,t.ptr);return 0===e?void 0:U.__wrap(e)}set_header(t,e){m(t,et),m(e,U),_.headermap_set_header(this.ptr,t.ptr,e.ptr)}keys(){var t=_.headermap_keys(this.ptr);return rt.__wrap(t)}static new(){var t=_.headermap_new();return Z.__wrap(t)}}class Q{static __wrap(t){const e=Object.create(Q.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_headers_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.headers_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.headers_from_bytes(e,r);return Q.__wrap(n)}protected(){var t=_.headers_protected(this.ptr);return nt.__wrap(t)}unprotected(){var t=_.headers_unprotected(this.ptr);return Z.__wrap(t)}static new(t,e){m(t,nt),m(e,Z);var r=_.headers_new(t.ptr,e.ptr);return Q.__wrap(r)}}class tt{static __wrap(t){const e=Object.create(tt.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_int_free(t)}static new(t){m(t,D);var e=t.ptr;t.ptr=0;var r=_.int_new(e);return tt.__wrap(r)}static new_negative(t){m(t,D);var e=t.ptr;t.ptr=0;var r=_.int_new_negative(e);return tt.__wrap(r)}static new_i32(t){var e=_.int_new_i32(t);return tt.__wrap(e)}is_positive(){return 0!==_.int_is_positive(this.ptr)}as_positive(){var t=_.int_as_positive(this.ptr);return 0===t?void 0:D.__wrap(t)}as_negative(){var t=_.int_as_negative(this.ptr);return 0===t?void 0:D.__wrap(t)}as_i32(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.int_as_i32(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];return 0===t?void 0:e}finally{_.__wbindgen_add_to_stack_pointer(16)}}}class et{static __wrap(t){const e=Object.create(et.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_label_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.label_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.label_from_bytes(e,r);return et.__wrap(n)}static new_int(t){m(t,tt);var e=_.label_new_int(t.ptr);return et.__wrap(e)}static new_text(t){var e=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),r=b,n=_.label_new_text(e,r);return et.__wrap(n)}kind(){return _.label_kind(this.ptr)>>>0}as_int(){var t=_.label_as_int(this.ptr);return 0===t?void 0:tt.__wrap(t)}as_text(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.label_as_text(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];let n;return 0!==t&&(n=d(t,e).slice(),_.__wbindgen_free(t,1*e)),n}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_algorithm_id(t){var e=_.label_from_algorithm_id(t);return et.__wrap(e)}static from_key_type(t){var e=_.label_from_key_type(t);return et.__wrap(e)}static from_ec_key(t){var e=_.label_from_ec_key(t);return et.__wrap(e)}static from_curve_type(t){var e=_.label_from_curve_type(t);return et.__wrap(e)}static from_key_operation(t){var e=_.label_from_key_operation(t);return et.__wrap(e)}}class rt{static __wrap(t){const e=Object.create(rt.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_labels_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.labels_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.labels_from_bytes(e,r);return rt.__wrap(n)}static new(){var t=_.coserecipients_new();return rt.__wrap(t)}len(){return _.coserecipients_len(this.ptr)>>>0}get(t){var e=_.labels_get(this.ptr,t);return et.__wrap(e)}add(t){m(t,et),_.labels_add(this.ptr,t.ptr)}}class _t{static __wrap(t){const e=Object.create(_t.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_passwordencryption_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.passwordencryption_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.passwordencryption_from_bytes(e,r);return _t.__wrap(n)}static new(t){m(t,$);var e=_.passwordencryption_new(t.ptr);return _t.__wrap(e)}}class nt{static __wrap(t){const e=Object.create(nt.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_protectedheadermap_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.protectedheadermap_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.protectedheadermap_from_bytes(e,r);return nt.__wrap(n)}static new_empty(){var t=_.protectedheadermap_new_empty();return nt.__wrap(t)}static new(t){m(t,Z);var e=_.protectedheadermap_new(t.ptr);return nt.__wrap(e)}deserialized_headers(){var t=_.protectedheadermap_deserialized_headers(this.ptr);return Z.__wrap(t)}}class st{static __wrap(t){const e=Object.create(st.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_pubkeyencryption_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.pubkeyencryption_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.pubkeyencryption_from_bytes(e,r);return st.__wrap(n)}static new(t){m(t,V);var e=_.pubkeyencryption_new(t.ptr);return st.__wrap(e)}}class at{static __wrap(t){const e=Object.create(at.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_sigstructure_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.sigstructure_from_bytes(e,r);return at.__wrap(n)}context(){return _.sigstructure_context(this.ptr)>>>0}body_protected(){var t=_.sigstructure_body_protected(this.ptr);return nt.__wrap(t)}sign_protected(){var t=_.sigstructure_sign_protected(this.ptr);return 0===t?void 0:nt.__wrap(t)}external_aad(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_external_aad(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}payload(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.sigstructure_payload(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}set_sign_protected(t){m(t,nt),_.sigstructure_set_sign_protected(this.ptr,t.ptr)}static new(t,e,r,n){m(e,nt);var s=v(r,_.__wbindgen_malloc),a=b,i=v(n,_.__wbindgen_malloc),o=b,c=_.sigstructure_new(t,e.ptr,s,a,i,o);return at.__wrap(c)}}class it{static __wrap(t){const e=Object.create(it.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_signedmessage_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.signedmessage_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.signedmessage_from_bytes(e,r);return it.__wrap(n)}static new_cose_sign(t){m(t,X);var e=_.signedmessage_new_cose_sign(t.ptr);return it.__wrap(e)}static new_cose_sign1(t){m(t,M);var e=_.signedmessage_new_cose_sign1(t.ptr);return it.__wrap(e)}static from_user_facing_encoding(t){var e=y(t,_.__wbindgen_malloc,_.__wbindgen_realloc),r=b,n=_.signedmessage_from_user_facing_encoding(e,r);return it.__wrap(n)}to_user_facing_encoding(){try{const r=_.__wbindgen_add_to_stack_pointer(-16);_.signedmessage_to_user_facing_encoding(r,this.ptr);var t=h()[r/4+0],e=h()[r/4+1];return d(t,e)}finally{_.__wbindgen_add_to_stack_pointer(16),_.__wbindgen_free(t,e)}}kind(){return _.signedmessage_kind(this.ptr)>>>0}as_cose_sign(){var t=_.signedmessage_as_cose_sign(this.ptr);return 0===t?void 0:X.__wrap(t)}as_cose_sign1(){var t=_.signedmessage_as_cose_sign1(this.ptr);return 0===t?void 0:M.__wrap(t)}}class ot{static __wrap(t){const e=Object.create(ot.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();_.__wbg_taggedcbor_free(t)}to_bytes(){try{const n=_.__wbindgen_add_to_stack_pointer(-16);_.taggedcbor_to_bytes(n,this.ptr);var t=h()[n/4+0],e=h()[n/4+1],r=f(t,e).slice();return _.__wbindgen_free(t,1*e),r}finally{_.__wbindgen_add_to_stack_pointer(16)}}static from_bytes(t){var e=v(t,_.__wbindgen_malloc),r=b,n=_.taggedcbor_from_bytes(e,r);return ot.__wrap(n)}tag(){var t=_.taggedcbor_tag(this.ptr);return D.__wrap(t)}value(){var t=_.taggedcbor_value(this.ptr);return U.__wrap(t)}static new(t,e){m(t,D);var r=t.ptr;t.ptr=0,m(e,U);var n=_.taggedcbor_new(r,e.ptr);return ot.__wrap(n)}}function ct(t){i(t)}function pt(t,e){return function(t){a===n.length&&n.push(n.length+1);const e=a;return a=n[e],n[e]=t,e}(d(t,e))}function dt(t,e){var r=y(w(s(e)),_.__wbindgen_malloc,_.__wbindgen_realloc),n=b;h()[t/4+1]=n,h()[t/4+0]=r}function wt(t,e){throw new Error(d(t,e))}function bt(t){throw i(t)}},82677:(t,e,r)=>{"use strict";var _=r.w[t.id];t.exports=_;r(4357);_[""]()}}]);