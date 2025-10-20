### My Data
- I am working on EEG data of 44 subjects of 5 groups - 
  - sub-001 to sub-010 -> group htr 
  - sub-025 to sub-034 -> group ctr 
  - sub-056 to sub-060 -> group tm  (4)
  - sub-060 to sub-069 -> group vip 
  - sub-079 to sub-088 -> group sny 
- Each subject has 4 tasks (task-med1breath, task-med2, task-think1, task-think2)
- Each task contains:
  - .bdf (raw EEG signal)
  - .tsv (channel metadata)
  - .json (recording metadata)
- The data is from BioSemi ActiveTwo, which uses:
- Reference: CMS/DRL
- Sampling frequency: 1024 Hz (extracted to 256Hz)
- Typical channel layout: 64–80 (Different for diff subjects) EEG + EXG + GSR + Resp + Misc
- I am loading these into MNE objects (mne.io.RawEDF).

Eg `htr.pkl`
```
{
  'sub-001': {
    'task-med1breath': <RawEDF | sub-001_task-med1breath_eeg.bdf, 80 x 155136 (606.0 s), ~94.8 MiB, data loaded>,
    'task-med2': <RawEDF | sub-001_task-med2_eeg.bdf, 80 x 154624 (604.0 s), ~94.5 MiB, data loaded>,
    'task-think1': <RawEDF | sub-001_task-think1_eeg.bdf, 80 x 155136 (606.0 s), ~94.8 MiB, data loaded>,
    'task-think2': <RawEDF | sub-001_task-think2_eeg.bdf, 80 x 155392 (607.0 s), ~94.9 MiB, data loaded>
  },
  'sub-002': {
    'task-med1breath': <RawEDF | sub-002_task-med1breath_eeg.bdf, 80 x 155136 (606.0 s), ~94.8 MiB, data loaded>,
    'task-med2': <RawEDF | sub-002_task-med2_eeg.bdf, 80 x 154880 (605.0 s), ~94.6 MiB, data loaded>,
    'task-think1': <RawEDF | sub-002_task-think1_eeg.bdf, 80 x 162048 (633.0 s), ~99.0 MiB, data loaded>,
    'task-think2': <RawEDF | sub-002_task-think2_eeg.bdf, 80 x 155136 (606.0 s), ~94.8 MiB, data loaded>
  },
  'sub-003': {
    'task-med1breath': <RawEDF | sub-003_task-med1breath_eeg.bdf, 73 x 154112 (602.0 s), ~85.9 MiB, data loaded>,
    'task-med2': <RawEDF | sub-003_task-med2_eeg.bdf, 73 x 154368 (603.0 s), ~86.1 MiB, data loaded>,
    'task-think1': <RawEDF | sub-003_task-think1_eeg.bdf, 73 x 155392 (607.0 s), ~86.6 MiB, data loaded>,
    'task-think2': <RawEDF | sub-003_task-think2_eeg.bdf, 73 x 156928 (613.0 s), ~87.5 MiB, data loaded>
  },
  'sub-004': {
    'task-med1breath': <RawEDF | sub-004_task-med1breath_eeg.bdf, 80 x 157696 (616.0 s), ~96.3 MiB, data loaded>,
    'task-med2': <RawEDF | sub-004_task-med2_eeg.bdf, 80 x 156928 (613.0 s), ~95.9 MiB, data loaded>,
    'task-think1': <RawEDF | sub-004_task-think1_eeg.bdf, 80 x 154624 (604.0 s), ~94.5 MiB, data loaded>,
    'task-think2': <RawEDF | sub-004_task-think2_eeg.bdf, 80 x 155136 (606.0 s), ~94.8 MiB, data loaded>
  },
  'sub-005': {
    'task-med1breath': <RawEDF | sub-005_task-med1breath_eeg.bdf, 80 x 154112 (602.0 s), ~94.2 MiB, data loaded>,
    'task-med2': <RawEDF | sub-005_task-med2_eeg.bdf, 80 x 168192 (657.0 s), ~102.7 MiB, data loaded>,
    'task-think1': <RawEDF | sub-005_task-think1_eeg.bdf, 80 x 155904 (609.0 s), ~95.2 MiB, data loaded>,
    'task-think2': <RawEDF | sub-005_task-think2_eeg.bdf, 80 x 153856 (601.0 s), ~94.0 MiB, data loaded>
  },
  'sub-006': {
    'task-med1breath': <RawEDF | sub-006_task-med1breath_eeg.bdf, 80 x 170752 (667.0 s), ~104.3 MiB, data loaded>,
    'task-med2': <RawEDF | sub-006_task-med2_eeg.bdf, 80 x 155904 (609.0 s), ~95.2 MiB, data loaded>,
    'task-think1': <RawEDF | sub-006_task-think1_eeg.bdf, 80 x 154368 (603.0 s), ~94.3 MiB, data loaded>,
    'task-think2': <RawEDF | sub-006_task-think2_eeg.bdf, 80 x 155904 (609.0 s), ~95.2 MiB, data loaded>
  },
  'sub-007': {
    'task-med1breath': <RawEDF | sub-007_task-med1breath_eeg.bdf, 80 x 156928 (613.0 s), ~95.9 MiB, data loaded>,
    'task-med2': <RawEDF | sub-007_task-med2_eeg.bdf, 80 x 164608 (643.0 s), ~100.6 MiB, data loaded>,
    'task-think1': <RawEDF | sub-007_task-think1_eeg.bdf, 80 x 156160 (610.0 s), ~95.4 MiB, data loaded>,
    'task-think2': <RawEDF | sub-007_task-think2_eeg.bdf, 80 x 157440 (615.0 s), ~96.2 MiB, data loaded>
  },
  'sub-008': {
    'task-med1breath': <RawEDF | sub-008_task-med1breath_eeg.bdf, 80 x 154112 (602.0 s), ~94.2 MiB, data loaded>,
    'task-med2': <RawEDF | sub-008_task-med2_eeg.bdf, 80 x 161792 (632.0 s), ~98.8 MiB, data loaded>,
    'task-think1': <RawEDF | sub-008_task-think1_eeg.bdf, 80 x 154880 (605.0 s), ~94.6 MiB, data loaded>,
    'task-think2': <RawEDF | sub-008_task-think2_eeg.bdf, 80 x 154880 (605.0 s), ~94.6 MiB, data loaded>
  },
  'sub-009': {
    'task-med1breath': <RawEDF | sub-009_task-med1breath_eeg.bdf, 73 x 154624 (604.0 s), ~86.2 MiB, data loaded>,
    'task-med2': <RawEDF | sub-009_task-med2_eeg.bdf, 73 x 154112 (602.0 s), ~85.9 MiB, data loaded>,
    'task-think1': <RawEDF | sub-009_task-think1_eeg.bdf, 73 x 156416 (611.0 s), ~87.2 MiB, data loaded>,
    'task-think2': <RawEDF | sub-009_task-think2_eeg.bdf, 73 x 157440 (615.0 s), ~87.8 MiB, data loaded>
  },
  'sub-010': {
    'task-med1breath': <RawEDF | sub-010_task-med1breath_eeg.bdf, 73 x 160512 (627.0 s), ~89.5 MiB, data loaded>,
    'task-med2': <RawEDF | sub-010_task-med2_eeg.bdf, 73 x 154880 (605.0 s), ~86.3 MiB, data loaded>,
    'task-think1': <RawEDF | sub-010_task-think1_eeg.bdf, 73 x 154624 (604.0 s), ~86.2 MiB, data loaded>,
    'task-think2': <RawEDF | sub-010_task-think2_eeg.bdf, 73 x 156672 (612.0 s), ~87.3 MiB, data loaded>
  }
}
```

raw_sub1.ch_names
| **Group** | **Channels** |
|------------|---------------|
| **Frontal & Prefrontal (EEG)** | Fp1, Fp2, Fpz, AF7, AF3, AF4, AF8, AFz, F1, F2, F3, F4, F5, F6, F7, F8, Fz |
| **Fronto-Central & Central (EEG)** | FC1, FC2, FC3, FC4, FC5, FC6, FCz, C1, C2, C3, C4, C5, C6, Cz |
| **Temporal (EEG)** | FT7, FT8, T7, T8, TP7, TP8 |
| **Parietal (EEG)** | P1, P2, P3, P4, P5, P6, P7, P8, P9, P10, Pz, CP1, CP2, CP3, CP4, CP5, CP6, CPz |
| **Occipital & Parieto-Occipital (EEG)** | O1, O2, Oz, PO3, PO4, PO7, PO8, POz, Iz |
| **EOG / EXG (External / Ocular / Facial)** | EXG1, EXG2, EXG3, EXG4, EXG5, EXG6, EXG7, EXG8 |
| **GSR (Galvanic Skin Response)** | GSR1, GSR2 |
| **Erg (Electrocardiogram / Ergometry)** | Erg1, Erg2 |
| **Respiration & Other Sensors** | Resp, Plet, Temp |


> {!imp}
> The status channal count is 65536


More
- I didnt find **physical_min** and **digital_min** in  my data, so I assummet as ADC
```
raww_sub1.get_data()
array([[-2.59325632e-01, -2.59325483e-01, -2.59325449e-01, ...,
        -2.59318638e-01, -2.59319131e-01, -2.59318726e-01],
       [-7.43725171e-03, -7.44600117e-03, -7.44733847e-03, ...,
        -7.70801927e-03, -7.71512483e-03, -7.71952197e-03],
       [-5.60862820e-03, -5.61598621e-03, -5.61555294e-03, ...,
        -5.86326429e-03, -5.87155869e-03, -5.87450678e-03],
       ...,
       [-4.05282587e+00, -4.05280401e+00, -4.05280922e+00, ...,
        -4.05269656e+00, -4.05269328e+00, -4.05270811e+00],
       [-5.00499994e-01, -5.00499994e-01, -5.00499994e-01, ...,
        -5.00499994e-01, -5.00499994e-01, -5.00499994e-01],
       [ 6.55360000e+04,  6.55360000e+04,  6.55360000e+04, ...,
         0.00000000e+00,  0.00000000e+00,  0.00000000e+00]])
```



