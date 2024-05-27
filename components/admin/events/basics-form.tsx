'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn, isPastDate } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { DateTimePicker } from '../../ui/time-picker/date-time-picker';

import { useToast } from '@/components/ui/use-toast';
import useCreateEvent from '@/stores/useCreateEvent';
import { useEffect, useMemo } from 'react';

const formSchema = z.object({
  concert_name: z.string().min(1, { message: '请输入活动名称' }),
  address: z.string().min(1, { message: '请输入活动地点' }),
  remark: z.string().min(1, { message: '请输入活动描述' }),
  concert_date: z.date({
    required_error: '请选择活动日期',
  }),
});

export default function BasicsForm() {
  const { updateStep, data, mode } = useCreateEvent();

  const disabled = useMemo(
    () => mode === 'readonly' || mode === 'review',
    [mode]
  );

  const { concert_name, address, remark, concert_date } = data.step1;

  const { toast } = useToast();

  const form1 = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      concert_name: concert_name ?? '',
      address: address ?? '',
      remark: remark ?? '',
      concert_date: concert_date ?? undefined,
    },
  });

  // 监听 data.step1 更新 form1
  useEffect(() => {
    if (data.step1) {
      // 只有当新值与当前表单值不同时才设置表单值
      if (data.step1.concert_name !== form1.getValues('concert_name')) {
        form1.setValue('concert_name', data.step1.concert_name ?? '');
      }
      if (data.step1.address !== form1.getValues('address')) {
        form1.setValue('address', data.step1.address ?? '');
      }
      if (data.step1.address !== form1.getValues('remark')) {
        form1.setValue('remark', data.step1.remark ?? '');
      }
      if (data.step1.entry_time !== form1.getValues('concert_date')) {
        form1.setValue('concert_date', data.step1.concert_date ?? undefined);
      }
      console.log('step1-data', data.step1);
    }
  }, [data.step1]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { concert_date } = values;
    if (isPastDate(concert_date)) {
      toast({
        title: '时间错误',
        description: '不能选择过去的时间',
        variant: 'destructive',
      });
      return;
    }
    updateStep(1, values);
  }

  return (
    <Form {...form1}>
      {mode}
      <form onSubmit={form1.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          disabled={disabled}
          control={form1.control}
          name="concert_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>活动名称</FormLabel>
              <FormControl>
                <Input placeholder="请输入活动名称" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={disabled}
          control={form1.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>活动地点</FormLabel>
              <FormControl>
                <Input placeholder="请输入活动地点" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={disabled}
          control={form1.control}
          name="remark"
          render={({ field }) => (
            <FormItem>
              <FormLabel>活动描述</FormLabel>
              <FormControl>
                <Input placeholder="请输入活动描述" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          disabled={disabled}
          control={form1.control}
          name="concert_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>入场时间</FormLabel>
              <Popover>
                <FormControl>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-[280px] justify-start text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, 'PPP HH:mm:ss')
                      ) : (
                        <span>入场时间</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                </FormControl>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    disabled={disabled}
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    initialFocus
                  />
                  <div className="p-3 border-t border-border">
                    <DateTimePicker
                      disabled={disabled}
                      setDate={field.onChange}
                      date={field.value}
                    />
                  </div>
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        {!disabled && (
          <div className="text-center mt-6">
            <Button type="submit">下一步</Button>
          </div>
        )}
      </form>
      <div className="text-center mt-6">
        {disabled && (
          <Button onClick={() => updateStep(1)}>（查看/审核）下一步</Button>
        )}
      </div>
    </Form>
  );
}
