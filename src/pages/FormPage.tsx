import { useEffect, useState } from 'react';
import { getNegara, getPelabuhan, getBarang } from '../services/api';
import { Barang, Negara, Pelabuhan } from '../types';
import { formatRupiah, unformatRupiah } from '../utils/format';
import SelectInput from '../components/SelectInput';
import InputText from '../components/InputText';
import TextareaInput from '../components/TextAreaInput';

const FormPage = () => {
    const [negaraList, setNegaraList] = useState<Negara[]>([]);
    const [pelabuhanList, setPelabuhanList] = useState<Pelabuhan[]>([]);
    const [barangList, setBarangList] = useState<Barang[]>([]);

    const [negaraId, setNegaraId] = useState('');
    const [pelabuhanId, setPelabuhanId] = useState('');
    const [barangId, setBarangId] = useState('');

    const [selectedBarang, setSelectedBarang] = useState<Barang | null>(null);

    const [harga, setHarga] = useState<number>(selectedBarang?.harga || 0);
    const [diskon, setDiskon] = useState<number>(selectedBarang?.diskon || 0);
    const [total, setTotal] = useState<number>(0);

    useEffect(() => {
        getNegara().then((res) => setNegaraList(res.data));
    }, []);

    useEffect(() => {
        if (negaraId) {
            getPelabuhan(Number(negaraId)).then((res) => setPelabuhanList(res.data));
        }
    }, [negaraId]);

    useEffect(() => {
        if (pelabuhanId) {
            getBarang(Number(pelabuhanId)).then((res) => setBarangList(res.data));
        }
    }, [pelabuhanId]);

    useEffect(() => {
        const barang = barangList.find((b) => b.id_barang.toString() === barangId);
        setSelectedBarang(barang || null);
    }, [barangId, barangList]);

    useEffect(() => {
        if (selectedBarang) {
            setHarga(selectedBarang?.harga)
            setDiskon(selectedBarang?.diskon)
        }
    }, [selectedBarang]);

    useEffect(() => {
        const afterDiskon = harga - (harga * diskon) / 100;
        setTotal(afterDiskon);
    }, [harga, diskon]);

    return (
        <div className="container py-5">
            <div className="card shadow-sm">
                <div className="card-body m-4">

                    <h3 className="card-title mb-4">SOAL TEST FRONTEND DEVELOPER - Form Transaksi Barang</h3>

                    <SelectInput
                        label="Negara"
                        value={negaraId}
                        options={negaraList.map((n) => ({ value: n.id_negara.toString(), label: `${n.kode_negara} - ${n.nama_negara}` }))}
                        onChange={(e) => {
                            setNegaraId(e?.value.toString() || '');
                            setPelabuhanId('');
                            setBarangId('');
                        }}
                    />

                    <SelectInput
                        label="Pelabuhan"
                        value={pelabuhanId}
                        options={pelabuhanList.map((p) => ({ value: p.id_pelabuhan.toString(), label: p.nama_pelabuhan }))}
                        onChange={(e) => {
                            setPelabuhanId(e?.value.toString() || '');
                            setBarangId('');
                        }}
                        disabled={!negaraId}
                    />

                    <SelectInput
                        label="Barang"
                        value={barangId}
                        options={barangList.map((b) => ({
                            value: b.id_barang.toString(),
                            label: `${b.id_barang} - ${b.nama_barang}`,
                        }))}
                        onChange={(e) => setBarangId(e?.value.toString() || '')}
                        disabled={!pelabuhanId}
                    />

                    <TextareaInput
                        label="Deskripsi Barang"
                        value={selectedBarang !== null ? selectedBarang.description : ''}
                        readOnly
                        disabled
                    />

                    <InputText
                        label="Diskon"
                        value={diskon.toString()}
                        suffix="%"
                        onChange={(e) => setDiskon(Number(e.target.value))}
                    />

                    <InputText
                        label="Harga"
                        value={formatRupiah(harga)}
                        onChange={(e) => {
                            const value = unformatRupiah(e.target.value);
                            setHarga(value);
                        }}
                    />

                    <InputText
                        label="Total"
                        value={formatRupiah(total)}
                        readOnly
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default FormPage;
