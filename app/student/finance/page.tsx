"use client";

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CreditCard, Download, History, Search, Filter, AlertCircle, CheckCircle2, DollarSign, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function StudentFinance() {
  const transactions = [
    { id: 'TRX-982', title: 'Spring Semester Tuition', amount: 2400, date: '15 Jan 2026', status: 'Paid', type: 'Education' },
    { id: 'TRX-875', title: 'Late Library Fee', amount: 15, date: '02 Feb 2026', status: 'Pending', type: 'Penalty' },
    { id: 'TRX-742', title: 'Academic Record Stamping', amount: 10, date: '20 Feb 2026', status: 'Paid', type: 'Service' },
  ];

  return (
    <div className="flex flex-col gap-6 text-left">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tuition & Payments</h1>
        <p className="text-slate-500 font-medium">Monitor your financial standing, scholarship status, and manage university-related payments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <DollarSign className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-[var(--color-primary)]/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Tuition (Yearly)</p>
           <p className="text-3xl font-black text-slate-900 tracking-tighter">4,800 AZN</p>
           <p className="text-[10px] font-bold text-slate-400">Paid: 3,400 AZN</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <Wallet className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-red-500/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Outstanding Balance</p>
           <p className="text-3xl font-black text-red-600 tracking-tighter">1,415 AZN</p>
           <p className="text-[10px] font-bold text-red-400">Deadline: Mar 30, 2026</p>
        </Card>
        <Card className="border-border shadow-sm bg-white p-6 flex flex-col gap-1 text-left relative overflow-hidden group">
           <Download className="h-10 w-10 absolute -right-2 -bottom-2 text-slate-50 rotate-12 group-hover:text-blue-500/5 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Scholarship Factor</p>
           <p className="text-3xl font-black text-blue-600 tracking-tighter">State Funded</p>
           <p className="text-[10px] font-bold text-blue-400">Category: Social Relief</p>
        </Card>
        <Card className="border-border shadow-sm bg-[var(--color-primary)] p-6 flex flex-col gap-1 text-left relative overflow-hidden group text-white">
           <CreditCard className="h-10 w-10 absolute -right-2 -bottom-2 text-white/5 rotate-12 group-hover:text-white/10 transition-colors" />
           <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Action Required</p>
           <p className="text-2xl font-black tracking-tighter uppercase">Quick Pay</p>
           <Button className="mt-2 h-8 bg-white text-[var(--color-primary)] font-black text-[9px] uppercase tracking-widest w-fit px-4 border-none hover:bg-slate-50">Invoice Generator</Button>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
         <Card className="lg:col-span-2 border-border shadow-sm bg-white overflow-hidden flex flex-col">
            <CardHeader className="bg-slate-50 border-b border-border p-4 px-6 flex flex-row items-center justify-between">
               <div className="flex items-center gap-2">
                  <History className="h-5 w-5 text-slate-400" />
                  <CardTitle className="text-lg font-bold">Billing History</CardTitle>
               </div>
               <div className="flex items-center gap-3">
                  <Button variant="outline" size="sm" className="h-8 px-4 text-[10px] font-black uppercase tracking-widest bg-white">
                     <Filter className="h-3 w-3 mr-2" /> Latest
                  </Button>
               </div>
            </CardHeader>
            <CardContent className="p-0">
               <div className="overflow-x-auto text-left">
                  <table className="min-w-full divide-y divide-border">
                     <thead className="bg-slate-50/30">
                        <tr>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Transaction ID</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-left">Description</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Amount</th>
                           <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-border bg-white">
                        {transactions.map((trx) => (
                           <tr key={trx.id} className="hover:bg-slate-50 transition-colors group">
                              <td className="px-6 py-4 whitespace-nowrap text-xs font-black text-slate-400">{trx.id}</td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                 <div className="flex flex-col">
                                    <span className="text-sm font-bold text-slate-900 not-italic">{trx.title}</span>
                                    <span className="text-[10px] font-medium text-slate-400">{trx.date} • {trx.type}</span>
                                 </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-center">
                                 <span className="text-sm font-black text-slate-700">{trx.amount} AZN</span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-right">
                                 <div className={cn(
                                    "px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border inline-flex items-center gap-1.5",
                                    trx.status === 'Paid' ? "bg-green-50 text-green-700 border-green-100" : "bg-amber-50 text-amber-700 border-amber-100"
                                 )}>
                                    {trx.status === 'Paid' ? <CheckCircle2 className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                                    {trx.status}
                                 </div>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </CardContent>
         </Card>

         <div className="space-y-6">
            <Card className="border-border shadow-sm bg-slate-900 text-white overflow-hidden p-8 text-center flex flex-col items-center">
               <div className="size-16 rounded-3xl bg-white/10 flex items-center justify-center mb-6 border border-white/10">
                  <CreditCard className="h-8 w-8 text-white" />
               </div>
               <h4 className="text-xl font-black">Bank Direct Pay</h4>
               <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed mb-8">
                  Pay your tuition directly via the portal using any local bank card. Secure processing provided by University Central Bank.
               </p>
               <Button className="w-full h-12 bg-white text-slate-900 font-black uppercase text-[11px] tracking-widest hover:bg-slate-100 shadow-xl border-none">
                  Launch Terminal
               </Button>
            </Card>

            <Card className="border-border shadow-sm bg-white overflow-hidden">
               <CardHeader className="bg-slate-50/50 border-b border-border">
                  <CardTitle className="text-sm font-bold">Financial Help & Docs</CardTitle>
               </CardHeader>
               <CardContent className="p-4 space-y-3">
                  {['Tuition Installment Plan', 'Scholarship Extension Guide', 'Bursary Fund Application'].map((item, idx) => (
                     <div key={idx} className="flex justify-between items-center p-3 rounded-xl border border-slate-100 hover:border-[var(--color-primary)] transition-all cursor-pointer group">
                        <div className="flex items-center gap-3">
                           <Download className="h-4 w-4 text-slate-300 group-hover:text-[var(--color-primary)]" />
                           <span className="text-xs font-bold text-slate-600 group-hover:text-slate-900">{item}</span>
                        </div>
                        <ChevronRight className="h-3.5 w-3.5 text-slate-200 group-hover:text-[var(--color-primary)]" />
                     </div>
                  ))}
               </CardContent>
            </Card>
         </div>
      </div>
    </div>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"/></svg>;
}
