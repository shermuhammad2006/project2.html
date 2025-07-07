// Translation data
const translations = {
    en: {
        title: "Karachi Electricity Tracker",
        subtitle: "Monitor your K-Electric consumption & bills",
        liveTracking: "Live Tracking",
        totalUnitsConsumed: "Total Units Consumed",
        units: "Units",
        estimatedBillAmount: "Estimated Bill Amount",
        currentPeriod: "Current period",
        averageDailyUsage: "Average Daily Usage",
        unitsPerDay: "Units per day",
        predictedMonthlyBill: "Predicted Monthly Bill",
        basedOnAvgUsage: "Based on avg usage",
        calculateUnitsBill: "Calculate Units & Bill",
        enterReadings: "Enter your current and previous meter readings",
        previousReading: "Previous Reading (Units)",
        previousReadingPlaceholder: "Enter previous units (e.g., 12000)",
        currentReading: "Current Reading (Units)",
        currentReadingPlaceholder: "Enter current units (e.g., 12345)",
        billingPeriod: "Billing Period (Days)",
        billingDaysPlaceholder: "Enter number of days (e.g., 30)",
        days: "days",
        calculateBill: "Calculate Bill",
        calculationResults: "Calculation Results",
        unitsConsumed: "Units Consumed:",
        estimatedBill: "Estimated Bill:",
        dailyAverage: "Daily Average:",
        costPerUnit: "Cost per Unit:",
        howToUse: "💡 How to use this calculator",
        step1: "• Enter your previous meter reading (from last bill)",
        step2: "• Enter your current meter reading",
        step3: "• Specify the billing period in days",
        step4: "• Get instant calculation of units consumed and estimated bill",
        step5: "• View your average daily consumption pattern",
        usageAnalysis: "Usage Analysis",
        consumptionPatterns: "Your electricity consumption patterns",
        totalUnits: "Total Units",
        avgUnitsPerCalc: "Avg units per calc",
        stable: "Stable",
        usageTrend: "Usage trend",
        recentCalculationsPattern: "Recent Calculations Pattern",
        billPrediction: "Bill Prediction",
        basedOnPatterns: "Based on your usage patterns",
        next30Days: "Next 30 Days",
        monthlyAverage: "Monthly Average",
        kElectricTariff: "K-Electric Tariff Rates",
        tariff1: "0-100 units:",
        tariff2: "101-200 units:",
        tariff3: "201-300 units:",
        tariff4: "301-700 units:",
        tariff5: "700+ units:",
        recentCalculations: "Recent Calculations",
        latestBillCalculations: "Your latest bill calculations",
        noCalculationsYet: "No calculations yet. Use the calculator above to get started!",
        validationError: "Please enter valid readings and billing days (1-365)"
    },
    ur: {
        title: "کراچی الیکٹرسٹی ٹریکر",
        subtitle: "اپنی کے الیکٹرک کی کھپت اور بلز کی نگرانی کریں",
        liveTracking: "لائیو ٹریکنگ",
        totalUnitsConsumed: "کل استعمال شدہ یونٹس",
        units: "یونٹس",
        estimatedBillAmount: "تخمینی بل کی رقم",
        currentPeriod: "موجودہ مدت",
        averageDailyUsage: "روزانہ اوسط استعمال",
        unitsPerDay: "یونٹس فی دن",
        predictedMonthlyBill: "پیشین گوئی شدہ ماہانہ بل",
        basedOnAvgUsage: "اوسط استعمال کی بنیاد پر",
        calculateUnitsBill: "یونٹس اور بل کیلکولیٹ کریں",
        enterReadings: "اپنی موجودہ اور پچھلی میٹر ریڈنگ درج کریں",
        previousReading: "پچھلی ریڈنگ (یونٹس)",
        previousReadingPlaceholder: "پچھلے یونٹس درج کریں (جیسے ۱۲۰۰۰)",
        currentReading: "موجودہ ریڈنگ (یونٹس)",
        currentReadingPlaceholder: "موجودہ یونٹس درج کریں (جیسے ۱۲۳۴۵)",
        billingPeriod: "بلنگ مدت (دن)",
        billingDaysPlaceholder: "دنوں کی تعداد درج کریں (جیسے ۳۰)",
        days: "دن",
        calculateBill: "بل کیلکولیٹ کریں",
        calculationResults: "کیلکولیشن کے نتائج",
        unitsConsumed: "استعمال شدہ یونٹس:",
        estimatedBill: "تخمینی بل:",
        dailyAverage: "روزانہ اوسط:",
        costPerUnit: "یونٹ کی قیمت:",
        howToUse: "💡 اس کیلکولیٹر کا استعمال کیسے کریں",
        step1: "• اپنی پچھلی میٹر ریڈنگ درج کریں (آخری بل سے)",
        step2: "• اپنی موجودہ میٹر ریڈنگ درج کریں",
        step3: "• بلنگ مدت دنوں میں بتائیں",
        step4: "• استعمال شدہ یونٹس اور تخمینی بل کا فوری حساب حاصل کریں",
        step5: "• اپنے روزانہ اوسط استعمال کا پیٹرن دیکھیں",
        usageAnalysis: "استعمال کا تجزیہ",
        consumptionPatterns: "آپ کی بجلی کی کھپت کے پیٹرن",
        totalUnits: "کل یونٹس",
        avgUnitsPerCalc: "اوسط یونٹس فی کیلکولیشن",
        stable: "مستحکم",
        usageTrend: "استعمال کا رجحان",
        recentCalculationsPattern: "حالیہ کیلکولیشن کا پیٹرن",
        billPrediction: "بل کی پیشین گوئی",
        basedOnPatterns: "آپ کے استعمال کے پیٹرن کی بنیاد پر",
        next30Days: "اگلے ۳۰ دن",
        monthlyAverage: "ماہانہ اوسط",
        kElectricTariff: "کے الیکٹرک ٹیرف ریٹس",
        tariff1: "۰-۱۰۰ یونٹس:",
        tariff2: "۱۰۱-۲۰۰ یونٹس:",
        tariff3: "۲۰۱-۳۰۰ یونٹس:",
        tariff4: "۳۰۱-۷۰۰ یونٹس:",
        tariff5: "۷۰۰+ یونٹس:",
        recentCalculations: "حالیہ کیلکولیشنز",
        latestBillCalculations: "آپ کی تازہ ترین بل کیلکولیشنز",
        noCalculationsYet: "ابھی تک کوئی کیلکولیشن نہیں۔ شروع کرنے کے لیے اوپر کیلکولیٹر استعمال کریں!",
        validationError: "براہ کرم درست ریڈنگز اور بلنگ دن (۱-۳۶۵) درج کریں"
    },
    es: {
        title: "Rastreador de Electricidad de Karachi",
        subtitle: "Monitorea tu consumo y facturas de K-Electric",
        liveTracking: "Seguimiento en Vivo",
        totalUnitsConsumed: "Total de Unidades Consumidas",
        units: "Unidades",
        estimatedBillAmount: "Monto Estimado de Factura",
        currentPeriod: "Período actual",
        averageDailyUsage: "Uso Diario Promedio",
        unitsPerDay: "Unidades por día",
        predictedMonthlyBill: "Factura Mensual Predicha",
        basedOnAvgUsage: "Basado en uso promedio",
        calculateUnitsBill: "Calcular Unidades y Factura",
        enterReadings: "Ingresa tus lecturas de medidor actual y anterior",
        previousReading: "Lectura Anterior (Unidades)",
        previousReadingPlaceholder: "Ingresa unidades anteriores (ej. 12000)",
        currentReading: "Lectura Actual (Unidades)",
        currentReadingPlaceholder: "Ingresa unidades actuales (ej. 12345)",
        billingPeriod: "Período de Facturación (Días)",
        billingDaysPlaceholder: "Ingresa número de días (ej. 30)",
        days: "días",
        calculateBill: "Calcular Factura",
        calculationResults: "Resultados del Cálculo",
        unitsConsumed: "Unidades Consumidas:",
        estimatedBill: "Factura Estimada:",
        dailyAverage: "Promedio Diario:",
        costPerUnit: "Costo por Unidad:",
        howToUse: "💡 Cómo usar esta calculadora",
        step1: "• Ingresa tu lectura anterior del medidor (de la última factura)",
        step2: "• Ingresa tu lectura actual del medidor",
        step3: "• Especifica el período de facturación en días",
        step4: "• Obtén cálculo instantáneo de unidades consumidas y factura estimada",
        step5: "• Ve tu patrón de consumo diario promedio",
        usageAnalysis: "Análisis de Uso",
        consumptionPatterns: "Tus patrones de consumo de electricidad",
        totalUnits: "Total de Unidades",
        avgUnitsPerCalc: "Promedio de unidades por cálculo",
        stable: "Estable",
        usageTrend: "Tendencia de uso",
        recentCalculationsPattern: "Patrón de Cálculos Recientes",
        billPrediction: "Predicción de Factura",
        basedOnPatterns: "Basado en tus patrones de uso",
        next30Days: "Próximos 30 Días",
        monthlyAverage: "Promedio Mensual",
        kElectricTariff: "Tarifas de K-Electric",
        tariff1: "0-100 unidades:",
        tariff2: "101-200 unidades:",
        tariff3: "201-300 unidades:",
        tariff4: "301-700 unidades:",
        tariff5: "700+ unidades:",
        recentCalculations: "Cálculos Recientes",
        latestBillCalculations: "Tus últimos cálculos de factura",
        noCalculationsYet: "Aún no hay cálculos. ¡Usa la calculadora de arriba para comenzar!",
        validationError: "Por favor ingresa lecturas válidas y días de facturación (1-365)"
    },
    fr: {
        title: "Tracker d'Électricité de Karachi",
        subtitle: "Surveillez votre consommation et factures K-Electric",
        liveTracking: "Suivi en Direct",
        totalUnitsConsumed: "Total des Unités Consommées",
        units: "Unités",
        estimatedBillAmount: "Montant Estimé de la Facture",
        currentPeriod: "Période actuelle",
        averageDailyUsage: "Usage Quotidien Moyen",
        unitsPerDay: "Unités par jour",
        predictedMonthlyBill: "Facture Mensuelle Prédite",
        basedOnAvgUsage: "Basé sur l'usage moyen",
        calculateUnitsBill: "Calculer les Unités et la Facture",
        enterReadings: "Entrez vos relevés de compteur actuel et précédent",
        previousReading: "Relevé Précédent (Unités)",
        previousReadingPlaceholder: "Entrez les unités précédentes (ex. 12000)",
        currentReading: "Relevé Actuel (Unités)",
        currentReadingPlaceholder: "Entrez les unités actuelles (ex. 12345)",
        billingPeriod: "Période de Facturation (Jours)",
        billingDaysPlaceholder: "Entrez le nombre de jours (ex. 30)",
        days: "jours",
        calculateBill: "Calculer la Facture",
        calculationResults: "Résultats du Calcul",
        unitsConsumed: "Unités Consommées:",
        estimatedBill: "Facture Estimée:",
        dailyAverage: "Moyenne Quotidienne:",
        costPerUnit: "Coût par Unité:",
        howToUse: "💡 Comment utiliser cette calculatrice",
        step1: "• Entrez votre relevé précédent du compteur (de la dernière facture)",
        step2: "• Entrez votre relevé actuel du compteur",
        step3: "• Spécifiez la période de facturation en jours",
        step4: "• Obtenez un calcul instantané des unités consommées et de la facture estimée",
        step5: "• Voyez votre modèle de consommation quotidienne moyenne",
        usageAnalysis: "Analyse d'Usage",
        consumptionPatterns: "Vos modèles de consommation d'électricité",
        totalUnits: "Total des Unités",
        avgUnitsPerCalc: "Moyenne d'unités par calcul",
        stable: "Stable",
        usageTrend: "Tendance d'usage",
        recentCalculationsPattern: "Modèle de Calculs Récents",
        billPrediction: "Prédiction de Facture",
        basedOnPatterns: "Basé sur vos modèles d'usage",
        next30Days: "Prochains 30 Jours",
        monthlyAverage: "Moyenne Mensuelle",
        kElectricTariff: "Tarifs K-Electric",
        tariff1: "0-100 unités:",
        tariff2: "101-200 unités:",
        tariff3: "201-300 unités:",
        tariff4: "301-700 unités:",
        tariff5: "700+ unités:",
        recentCalculations: "Calculs Récents",
        latestBillCalculations: "Vos derniers calculs de facture",
        noCalculationsYet: "Pas encore de calculs. Utilisez la calculatrice ci-dessus pour commencer!",
        validationError: "Veuillez entrer des relevés valides et des jours de facturation (1-365)"
    },
    de: {
        title: "Karachi Elektrizitäts-Tracker",
        subtitle: "Überwachen Sie Ihren K-Electric Verbrauch und Rechnungen",
        liveTracking: "Live-Verfolgung",
        totalUnitsConsumed: "Gesamte Verbrauchte Einheiten",
        units: "Einheiten",
        estimatedBillAmount: "Geschätzter Rechnungsbetrag",
        currentPeriod: "Aktuelle Periode",
        averageDailyUsage: "Durchschnittlicher Tagesverbrauch",
        unitsPerDay: "Einheiten pro Tag",
        predictedMonthlyBill: "Vorhergesagte Monatsrechnung",
        basedOnAvgUsage: "Basierend auf durchschnittlichem Verbrauch",
        calculateUnitsBill: "Einheiten und Rechnung Berechnen",
        enterReadings: "Geben Sie Ihre aktuellen und vorherigen Zählerstandsablesungen ein",
        previousReading: "Vorherige Ablesung (Einheiten)",
        previousReadingPlaceholder: "Vorherige Einheiten eingeben (z.B. 12000)",
        currentReading: "Aktuelle Ablesung (Einheiten)",
        currentReadingPlaceholder: "Aktuelle Einheiten eingeben (z.B. 12345)",
        billingPeriod: "Abrechnungsperiode (Tage)",
        billingDaysPlaceholder: "Anzahl der Tage eingeben (z.B. 30)",
        days: "Tage",
        calculateBill: "Rechnung Berechnen",
        calculationResults: "Berechnungsergebnisse",
        unitsConsumed: "Verbrauchte Einheiten:",
        estimatedBill: "Geschätzte Rechnung:",
        dailyAverage: "Tagesdurchschnitt:",
        costPerUnit: "Kosten pro Einheit:",
        howToUse: "💡 Wie man diesen Rechner verwendet",
        step1: "• Geben Sie Ihre vorherige Zählerablesung ein (von der letzten Rechnung)",
        step2: "• Geben Sie Ihre aktuelle Zählerablesung ein",
        step3: "• Geben Sie die Abrechnungsperiode in Tagen an",
        step4: "• Erhalten Sie sofortige Berechnung der verbrauchten Einheiten und geschätzten Rechnung",
        step5: "• Sehen Sie Ihr durchschnittliches tägliches Verbrauchsmuster",
        usageAnalysis: "Verbrauchsanalyse",
        consumptionPatterns: "Ihre Stromverbrauchsmuster",
        totalUnits: "Gesamte Einheiten",
        avgUnitsPerCalc: "Durchschnittliche Einheiten pro Berechnung",
        stable: "Stabil",
        usageTrend: "Verbrauchstrend",
        recentCalculationsPattern: "Muster der letzten Berechnungen",
        billPrediction: "Rechnungsvorhersage",
        basedOnPatterns: "Basierend auf Ihren Verbrauchsmustern",
        next30Days: "Nächsten 30 Tage",
        monthlyAverage: "Monatlicher Durchschnitt",
        kElectricTariff: "K-Electric Tarife",
        tariff1: "0-100 Einheiten:",
        tariff2: "101-200 Einheiten:",
        tariff3: "201-300 Einheiten:",
        tariff4: "301-700 Einheiten:",
        tariff5: "700+ Einheiten:",
        recentCalculations: "Letzte Berechnungen",
        latestBillCalculations: "Ihre neuesten Rechnungsberechnungen",
        noCalculationsYet: "Noch keine Berechnungen. Verwenden Sie den obigen Rechner, um zu beginnen!",
        validationError: "Bitte geben Sie gültige Ablesungen und Abrechnungstage (1-365) ein"
    },
    it: {
        title: "Tracker dell'Elettricità di Karachi",
        subtitle: "Monitora il tuo consumo e le bollette K-Electric",
        liveTracking: "Tracciamento Live",
        totalUnitsConsumed: "Totale Unità Consumate",
        units: "Unità",
        estimatedBillAmount: "Importo Stimato della Bolletta",
        currentPeriod: "Periodo attuale",
        averageDailyUsage: "Uso Giornaliero Medio",
        unitsPerDay: "Unità per giorno",
        predictedMonthlyBill: "Bolletta Mensile Prevista",
        basedOnAvgUsage: "Basato sull'uso medio",
        calculateUnitsBill: "Calcola Unità e Bolletta",
        enterReadings: "Inserisci le tue letture del contatore attuale e precedente",
        previousReading: "Lettura Precedente (Unità)",
        previousReadingPlaceholder: "Inserisci unità precedenti (es. 12000)",
        currentReading: "Lettura Attuale (Unità)",
        currentReadingPlaceholder: "Inserisci unità attuali (es. 12345)",
        billingPeriod: "Periodo di Fatturazione (Giorni)",
        billingDaysPlaceholder: "Inserisci numero di giorni (es. 30)",
        days: "giorni",
        calculateBill: "Calcola Bolletta",
        calculationResults: "Risultati del Calcolo",
        unitsConsumed: "Unità Consumate:",
        estimatedBill: "Bolletta Stimata:",
        dailyAverage: "Media Giornaliera:",
        costPerUnit: "Costo per Unità:",
        howToUse: "💡 Come usare questa calcolatrice",
        step1: "• Inserisci la tua lettura precedente del contatore (dall'ultima bolletta)",
        step2: "• Inserisci la tua lettura attuale del contatore",
        step3: "• Specifica il periodo di fatturazione in giorni",
        step4: "• Ottieni calcolo istantaneo delle unità consumate e bolletta stimata",
        step5: "• Visualizza il tuo modello di consumo giornaliero medio",
        usageAnalysis: "Analisi dell'Uso",
        consumptionPatterns: "I tuoi modelli di consumo elettrico",
        totalUnits: "Totale Unità",
        avgUnitsPerCalc: "Media unità per calcolo",
        stable: "Stabile",
        usageTrend: "Tendenza dell'uso",
        recentCalculationsPattern: "Modello dei Calcoli Recenti",
        billPrediction: "Previsione della Bolletta",
        basedOnPatterns: "Basato sui tuoi modelli di uso",
        next30Days: "Prossimi 30 Giorni",
        monthlyAverage: "Media Mensile",
        kElectricTariff: "Tariffe K-Electric",
        tariff1: "0-100 unità:",
        tariff2: "101-200 unità:",
        tariff3: "201-300 unità:",
        tariff4: "301-700 unità:",
        tariff5: "700+ unità:",
        recentCalculations: "Calcoli Recenti",
        latestBillCalculations: "I tuoi ultimi calcoli della bolletta",
        noCalculationsYet: "Nessun calcolo ancora. Usa la calcolatrice sopra per iniziare!",
        validationError: "Per favore inserisci letture valide e giorni di fatturazione (1-365)"
    },
    pt: {
        title: "Rastreador de Eletricidade de Karachi",
        subtitle: "Monitore seu consumo e contas K-Electric",
        liveTracking: "Rastreamento ao Vivo",
        totalUnitsConsumed: "Total de Unidades Consumidas",
        units: "Unidades",
        estimatedBillAmount: "Valor Estimado da Conta",
        currentPeriod: "Período atual",
        averageDailyUsage: "Uso Diário Médio",
        unitsPerDay: "Unidades por dia",
        predictedMonthlyBill: "Conta Mensal Prevista",
        basedOnAvgUsage: "Baseado no uso médio",
        calculateUnitsBill: "Calcular Unidades e Conta",
        enterReadings: "Digite suas leituras atuais e anteriores do medidor",
        previousReading: "Leitura Anterior (Unidades)",
        previousReadingPlaceholder: "Digite unidades anteriores (ex. 12000)",
        currentReading: "Leitura Atual (Unidades)",
        currentReadingPlaceholder: "Digite unidades atuais (ex. 12345)",
        billingPeriod: "Período de Faturamento (Dias)",
        billingDaysPlaceholder: "Digite número de dias (ex. 30)",
        days: "dias",
        calculateBill: "Calcular Conta",
        calculationResults: "Resultados do Cálculo",
        unitsConsumed: "Unidades Consumidas:",
        estimatedBill: "Conta Estimada:",
        dailyAverage: "Média Diária:",
        costPerUnit: "Custo por Unidade:",
        howToUse: "💡 Como usar esta calculadora",
        step1: "• Digite sua leitura anterior do medidor (da última conta)",
        step2: "• Digite sua leitura atual do medidor",
        step3: "• Especifique o período de faturamento em dias",
        step4: "• Obtenha cálculo instantâneo das unidades consumidas e conta estimada",
        step5: "• Veja seu padrão de consumo diário médio",
        usageAnalysis: "Análise de Uso",
        consumptionPatterns: "Seus padrões de consumo de eletricidade",
        totalUnits: "Total de Unidades",
        avgUnitsPerCalc: "Média de unidades por cálculo",
        stable: "Estável",
        usageTrend: "Tendência de uso",
        recentCalculationsPattern: "Padrão de Cálculos Recentes",
        billPrediction: "Previsão da Conta",
        basedOnPatterns: "Baseado em seus padrões de uso",
        next30Days: "Próximos 30 Dias",
        monthlyAverage: "Média Mensal",
        kElectricTariff: "Tarifas K-Electric",
        tariff1: "0-100 unidades:",
        tariff2: "101-200 unidades:",
        tariff3: "201-300 unidades:",
        tariff4: "301-700 unidades:",
        tariff5: "700+ unidades:",
        recentCalculations: "Cálculos Recentes",
        latestBillCalculations: "Seus últimos cálculos de conta",
        noCalculationsYet: "Nenhum cálculo ainda. Use a calculadora acima para começar!",
        validationError: "Por favor, digite leituras válidas e dias de faturamento (1-365)"
    },
    ru: {
        title: "Трекер Электричества Карачи",
        subtitle: "Отслеживайте потребление и счета K-Electric",
        liveTracking: "Отслеживание в реальном времени",
        totalUnitsConsumed: "Общее потребление единиц",
        units: "Единицы",
        estimatedBillAmount: "Расчетная сумма счета",
        currentPeriod: "Текущий период",
        averageDailyUsage: "Среднее ежедневное потребление",
        unitsPerDay: "Единиц в день",
        predictedMonthlyBill: "Прогнозируемый месячный счет",
        basedOnAvgUsage: "На основе среднего потребления",
        calculateUnitsBill: "Рассчитать единицы и счет",
        enterReadings: "Введите текущие и предыдущие показания счетчика",
        previousReading: "Предыдущие показания (единицы)",
        previousReadingPlaceholder: "Введите предыдущие единицы (например, 12000)",
        currentReading: "Текущие показания (единицы)",
        currentReadingPlaceholder: "Введите текущие единицы (например, 12345)",
        billingPeriod: "Расчетный период (дни)",
        billingDaysPlaceholder: "Введите количество дней (например, 30)",
        days: "дни",
        calculateBill: "Рассчитать счет",
        calculationResults: "Результаты расчета",
        unitsConsumed: "Потреблено единиц:",
        estimatedBill: "Расчетный счет:",
        dailyAverage: "Среднее за день:",
        costPerUnit: "Стоимость за единицу:",
        howToUse: "💡 Как использовать этот калькулятор",
        step1: "• Введите предыдущие показания счетчика (из последнего счета)",
        step2: "• Введите текущие показания счетчика",
        step3: "• Укажите расчетный период в днях",
        step4: "• Получите мгновенный расчет потребленных единиц и расчетного счета",
        step5: "• Посмотрите шаблон среднего ежедневного потребления",
        usageAnalysis: "Анализ потребления",
        consumptionPatterns: "Ваши шаблоны потребления электричества",
        totalUnits: "Общие единицы",
        avgUnitsPerCalc: "Среднее единиц за расчет",
        stable: "Стабильный",
        usageTrend: "Тенденция потребления",
        recentCalculationsPattern: "Шаблон последних расчетов",
        billPrediction: "Прогноз счета",
        basedOnPatterns: "На основе ваших шаблонов потребления",
        next30Days: "Следующие 30 дней",
        monthlyAverage: "Месячное среднее",
        kElectricTariff: "Тарифы K-Electric",
        tariff1: "0-100 единиц:",
        tariff2: "101-200 единиц:",
        tariff3: "201-300 единиц:",
        tariff4: "301-700 единиц:",
        tariff5: "700+ единиц:",
        recentCalculations: "Последние расчеты",
        latestBillCalculations: "Ваши последние расчеты счетов",
        noCalculationsYet: "Пока нет расчетов. Используйте калькулятор выше для начала!",
        validationError: "Пожалуйста, введите действительные показания и дни выставления счетов (1-365)"
    },
    ja: {
        title: "カラチ電力トラッカー",
        subtitle: "K-Electricの消費量と請求書を監視",
        liveTracking: "リアルタイム追跡",
        totalUnitsConsumed: "総消費単位数",
        units: "単位",
        estimatedBillAmount: "推定請求額",
        currentPeriod: "現在の期間",
        averageDailyUsage: "平均日使用量",
        unitsPerDay: "1日あたりの単位",
        predictedMonthlyBill: "予測月次請求書",
        basedOnAvgUsage: "平均使用量に基づく",
        calculateUnitsBill: "単位と請求書を計算",
        enterReadings: "現在と前回のメーター読み取り値を入力",
        previousReading: "前回の読み取り値（単位）",
        previousReadingPlaceholder: "前回の単位を入力（例：12000）",
        currentReading: "現在の読み取り値（単位）",
        currentReadingPlaceholder: "現在の単位を入力（例：12345）",
        billingPeriod: "請求期間（日）",
        billingDaysPlaceholder: "日数を入力（例：30）",
        days: "日",
        calculateBill: "請求書を計算",
        calculationResults: "計算結果",
        unitsConsumed: "消費単位数:",
        estimatedBill: "推定請求書:",
        dailyAverage: "日平均:",
        costPerUnit: "単位あたりのコスト:",
        howToUse: "💡 この計算機の使い方",
        step1: "• 前回のメーター読み取り値を入力（最後の請求書から）",
        step2: "• 現在のメーター読み取り値を入力",
        step3: "• 請求期間を日数で指定",
        step4: "• 消費単位数と推定請求書の即座の計算を取得",
        step5: "• 平均日消費パターンを表示",
        usageAnalysis: "使用量分析",
        consumptionPatterns: "あなたの電力消費パターン",
        totalUnits: "総単位数",
        avgUnitsPerCalc: "計算あたりの平均単位",
        stable: "安定",
        usageTrend: "使用量トレンド",
        recentCalculationsPattern: "最近の計算パターン",
        billPrediction: "請求書予測",
        basedOnPatterns: "あなたの使用パターンに基づく",
        next30Days: "次の30日",
        monthlyAverage: "月平均",
        kElectricTariff: "K-Electric料金",
        tariff1: "0-100単位:",
        tariff2: "101-200単位:",
        tariff3: "201-300単位:",
        tariff4: "301-700単位:",
        tariff5: "700+単位:",
        recentCalculations: "最近の計算",
        latestBillCalculations: "あなたの最新の請求書計算",
        noCalculationsYet: "まだ計算がありません。開始するには上の計算機を使用してください！",
        validationError: "有効な読み取り値と請求日数（1-365）を入力してください"
    },
    ko: {
        title: "카라치 전기 트래커",
        subtitle: "K-Electric 소비량과 청구서 모니터링",
        liveTracking: "실시간 추적",
        totalUnitsConsumed: "총 소비 단위",
        units: "단위",
        estimatedBillAmount: "예상 청구 금액",
        currentPeriod: "현재 기간",
        averageDailyUsage: "일평균 사용량",
        unitsPerDay: "일일 단위",
        predictedMonthlyBill: "예측 월 청구서",
        basedOnAvgUsage: "평균 사용량 기반",
        calculateUnitsBill: "단위 및 청구서 계산",
        enterReadings: "현재 및 이전 미터 판독값 입력",
        previousReading: "이전 판독값 (단위)",
        previousReadingPlaceholder: "이전 단위 입력 (예: 12000)",
        currentReading: "현재 판독값 (단위)",
        currentReadingPlaceholder: "현재 단위 입력 (예: 12345)",
        billingPeriod: "청구 기간 (일)",
        billingDaysPlaceholder: "일수 입력 (예: 30)",
        days: "일",
        calculateBill: "청구서 계산",
        calculationResults: "계산 결과",
        unitsConsumed: "소비 단위:",
        estimatedBill: "예상 청구서:",
        dailyAverage: "일평균:",
        costPerUnit: "단위당 비용:",
        howToUse: "💡 이 계산기 사용법",
        step1: "• 이전 미터 판독값 입력 (마지막 청구서에서)",
        step2: "• 현재 미터 판독값 입력",
        step3: "• 청구 기간을 일수로 지정",
        step4: "• 소비 단위와 예상 청구서의 즉시 계산 얻기",
        step5: "• 평균 일일 소비 패턴 보기",
        usageAnalysis: "사용량 분석",
        consumptionPatterns: "전력 소비 패턴",
        totalUnits: "총 단위",
        avgUnitsPerCalc: "계산당 평균 단위",
        stable: "안정적",
        usageTrend: "사용량 추세",
        recentCalculationsPattern: "최근 계산 패턴",
        billPrediction: "청구서 예측",
        basedOnPatterns: "사용 패턴 기반",
        next30Days: "다음 30일",
        monthlyAverage: "월평균",
        kElectricTariff: "K-Electric 요금",
        tariff1: "0-100 단위:",
        tariff2: "101-200 단위:",
        tariff3: "201-300 단위:",
        tariff4: "301-700 단위:",
        tariff5: "700+ 단위:",
        recentCalculations: "최근 계산",
        latestBillCalculations: "최신 청구서 계산",
        noCalculationsYet: "아직 계산이 없습니다. 시작하려면 위의 계산기를 사용하세요!",
        validationError: "유효한 판독값과 청구 일수(1-365)를 입력하세요"
    },
    zh: {
        title: "卡拉奇电力跟踪器",
        subtitle: "监控您的K-Electric消耗和账单",
        liveTracking: "实时跟踪",
        totalUnitsConsumed: "总消耗单位",
        units: "单位",
        estimatedBillAmount: "预估账单金额",
        currentPeriod: "当前期间",
        averageDailyUsage: "平均每日使用量",
        unitsPerDay: "每日单位",
        predictedMonthlyBill: "预测月度账单",
        basedOnAvgUsage: "基于平均使用量",
        calculateUnitsBill: "计算单位和账单",
        enterReadings: "输入您的当前和之前的电表读数",
        previousReading: "之前读数（单位）",
        previousReadingPlaceholder: "输入之前的单位（例如：12000）",
        currentReading: "当前读数（单位）",
        currentReadingPlaceholder: "输入当前单位（例如：12345）",
        billingPeriod: "计费期间（天）",
        billingDaysPlaceholder: "输入天数（例如：30）",
        days: "天",
        calculateBill: "计算账单",
        calculationResults: "计算结果",
        unitsConsumed: "消耗单位:",
        estimatedBill: "预估账单:",
        dailyAverage: "日平均:",
        costPerUnit: "单位成本:",
        howToUse: "💡 如何使用此计算器",
        step1: "• 输入您的之前电表读数（从最后一张账单）",
        step2: "• 输入您的当前电表读数",
        step3: "• 指定计费期间天数",
        step4: "• 获取消耗单位和预估账单的即时计算",
        step5: "• 查看您的平均日消耗模式",
        usageAnalysis: "使用分析",
        consumptionPatterns: "您的电力消耗模式",
        totalUnits: "总单位",
        avgUnitsPerCalc: "每次计算的平均单位",
        stable: "稳定",
        usageTrend: "使用趋势",
        recentCalculationsPattern: "最近计算模式",
        billPrediction: "账单预测",
        basedOnPatterns: "基于您的使用模式",
        next30Days: "接下来30天",
        monthlyAverage: "月平均",
        kElectricTariff: "K-Electric费率",
        tariff1: "0-100单位:",
        tariff2: "101-200单位:",
        tariff3: "201-300单位:",
        tariff4: "301-700单位:",
        tariff5: "700+单位:",
        recentCalculations: "最近计算",
        latestBillCalculations: "您的最新账单计算",
        noCalculationsYet: "还没有计算。使用上面的计算器开始吧！",
        validationError: "请输入有效的读数和计费天数（1-365）"
    },
    ar: {
        title: "متتبع كهرباء كراتشي",
        subtitle: "راقب استهلاك وفواتير K-Electric",
        liveTracking: "التتبع المباشر",
        totalUnitsConsumed: "إجمالي الوحدات المستهلكة",
        units: "وحدات",
        estimatedBillAmount: "المبلغ المقدر للفاتورة",
        currentPeriod: "الفترة الحالية",
        averageDailyUsage: "متوسط الاستخدام اليومي",
        unitsPerDay: "وحدات في اليوم",
        predictedMonthlyBill: "الفاتورة الشهرية المتوقعة",
        basedOnAvgUsage: "بناءً على متوسط الاستخدام",
        calculateUnitsBill: "حساب الوحدات والفاتورة",
        enterReadings: "أدخل قراءات العداد الحالية والسابقة",
        previousReading: "القراءة السابقة (وحدات)",
        previousReadingPlaceholder: "أدخل الوحدات السابقة (مثل ١٢٠٠٠)",
        currentReading: "القراءة الحالية (وحدات)",
        currentReadingPlaceholder: "أدخل الوحدات الحالية (مثل ١٢٣٤٥)",
        billingPeriod: "فترة الفوترة (أيام)",
        billingDaysPlaceholder: "أدخل عدد الأيام (مثل ٣٠)",
        days: "أيام",
        calculateBill: "حساب الفاتورة",
        calculationResults: "نتائج الحساب",
        unitsConsumed: "الوحدات المستهلكة:",
        estimatedBill: "الفاتورة المقدرة:",
        dailyAverage: "المتوسط اليومي:",
        costPerUnit: "التكلفة لكل وحدة:",
        howToUse: "💡 كيفية استخدام هذه الآلة الحاسبة",
        step1: "• أدخل قراءة العداد السابقة (من آخر فاتورة)",
        step2: "• أدخل قراءة العداد الحالية",
        step3: "• حدد فترة الفوترة بالأيام",
        step4: "• احصل على حساب فوري للوحدات المستهلكة والفاتورة المقدرة",
        step5: "• اعرض نمط استهلاكك اليومي المتوسط",
        usageAnalysis: "تحليل الاستخدام",
        consumptionPatterns: "أنماط استهلاك الكهرباء",
        totalUnits: "إجمالي الوحدات",
        avgUnitsPerCalc: "متوسط الوحدات لكل حساب",
        stable: "مستقر",
        usageTrend: "اتجاه الاستخدام",
        recentCalculationsPattern: "نمط الحسابات الأخيرة",
        billPrediction: "توقع الفاتورة",
        basedOnPatterns: "بناءً على أنماط الاستخدام",
        next30Days: "الـ 30 يوماً القادمة",
        monthlyAverage: "المتوسط الشهري",
        kElectricTariff: "تعرفة K-Electric",
        tariff1: "٠-١٠٠ وحدة:",
        tariff2: "١٠١-٢٠٠ وحدة:",
        tariff3: "٢٠١-٣٠٠ وحدة:",
        tariff4: "٣٠١-٧٠٠ وحدة:",
        tariff5: "٧٠٠+ وحدة:",
        recentCalculations: "الحسابات الأخيرة",
        latestBillCalculations: "حسابات فواتيرك الأخيرة",
        noCalculationsYet: "لا توجد حسابات حتى الآن. استخدم الآلة الحاسبة أعلاه للبدء!",
        validationError: "يرجى إدخال قراءات صحيحة وأيام الفوترة (١-٣٦٥)"
    },
    hi: {
        title: "कराची विद्युत ट्रैकर",
        subtitle: "अपने K-Electric उपभोग और बिल मॉनिटर करें",
        liveTracking: "लाइव ट्रैकिंग",
        totalUnitsConsumed: "कुल उपभोग इकाइयां",
        units: "इकाइयां",
        estimatedBillAmount: "अनुमानित बिल राशि",
        currentPeriod: "वर्तमान अवधि",
        averageDailyUsage: "औसत दैनिक उपयोग",
        unitsPerDay: "प्रति दिन इकाइयां",
        predictedMonthlyBill: "अनुमानित मासिक बिल",
        basedOnAvgUsage: "औसत उपयोग पर आधारित",
        calculateUnitsBill: "इकाइयां और बिल गणना करें",
        enterReadings: "अपने वर्तमान और पिछले मीटर रीडिंग दर्ज करें",
        previousReading: "पिछली रीडिंग (इकाइयां)",
        previousReadingPlaceholder: "पिछली इकाइयां दर्ज करें (जैसे १२०००)",
        currentReading: "वर्तमान रीडिंग (इकाइयां)",
        currentReadingPlaceholder: "वर्तमान इकाइयां दर्ज करें (जैसे १२३४५)",
        billingPeriod: "बिलिंग अवधि (दिन)",
        billingDaysPlaceholder: "दिनों की संख्या दर्ज करें (जैसे ३०)",
        days: "दिन",
        calculateBill: "बिल गणना करें",
        calculationResults: "गणना परिणाम",
        unitsConsumed: "उपभोग इकाइयां:",
        estimatedBill: "अनुमानित बिल:",
        dailyAverage: "दैनिक औसत:",
        costPerUnit: "प्रति इकाई लागत:",
        howToUse: "💡 इस कैलकुलेटर का उपयोग कैसे करें",
        step1: "• अपनी पिछली मीटर रीडिंग दर्ज करें (अंतिम बिल से)",
        step2: "• अपनी वर्तमान मीटर रीडिंग दर्ज करें",
        step3: "• बिलिंग अवधि दिनों में निर्दिष्ट करें",
        step4: "• उपभोग इकाइयों और अनुमानित बिल की तत्काल गणना प्राप्त करें",
        step5: "• अपने औसत दैनिक उपभोग पैटर्न देखें",
        usageAnalysis: "उपयोग विश्लेषण",
        consumptionPatterns: "आपके विद्युत उपभोग पैटर्न",
        totalUnits: "कुल इकाइयां",
        avgUnitsPerCalc: "प्रति गणना औसत इकाइयां",
        stable: "स्थिर",
        usageTrend: "उपयोग प्रवृत्ति",
        recentCalculationsPattern: "हाल की गणना पैटर्न",
        billPrediction: "बिल पूर्वानुमान",
        basedOnPatterns: "आपके उपयोग पैटर्न पर आधारित",
        next30Days: "अगले ३० दिन",
        monthlyAverage: "मासिक औसत",
        kElectricTariff: "K-Electric दरें",
        tariff1: "०-१०० इकाइयां:",
        tariff2: "१०१-२०० इकाइयां:",
        tariff3: "२०१-३०० इकाइयां:",
        tariff4: "३०१-७०० इकाइयां:",
        tariff5: "७००+ इकाइयां:",
        recentCalculations: "हाल की गणनाएं",
        latestBillCalculations: "आपकी नवीनतम बिल गणनाएं",
        noCalculationsYet: "अभी तक कोई गणना नहीं। शुरू करने के लिए ऊपर कैलकुलेटर का उपयोग करें!",
        validationError: "कृपया वैध रीडिंग और बिलिंग दिन (१-३६५) दर्ज करें"
    },
    bn: {
        title: "ঢাকা বিদ্যুৎ ট্র্যাকার",
        subtitle: "আপনার K-Electric ব্যবহার এবং বিল মনিটর করুন",
        liveTracking: "লাইভ ট্র্যাকিং",
        totalUnitsConsumed: "মোট ব্যবহৃত ইউনিট",
        units: "ইউনিট",
        estimatedBillAmount: "আনুমানিক বিলের পরিমাণ",
        currentPeriod: "বর্তমান সময়কাল",
        averageDailyUsage: "দৈনিক গড় ব্যবহার",
        unitsPerDay: "প্রতিদিন ইউনিট",
        predictedMonthlyBill: "পূর্বাভাসিত মাসিক বিল",
        basedOnAvgUsage: "গড় ব্যবহারের উপর ভিত্তি করে",
        calculateUnitsBill: "ইউনিট এবং বিল গণনা করুন",
        enterReadings: "আপনার বর্তমান এবং পূর্ববর্তী মিটার রিডিং লিখুন",
        previousReading: "পূর্ববর্তী রিডিং (ইউনিট)",
        previousReadingPlaceholder: "পূর্ববর্তী ইউনিট লিখুন (যেমন ১২০০০)",
        currentReading: "বর্তমান রিডিং (ইউনিট)",
        currentReadingPlaceholder: "বর্তমান ইউনিট লিখুন (যেমন ১২৩৪৫)",
        billingPeriod: "বিলিং সময়কাল (দিন)",
        billingDaysPlaceholder: "দিনের সংখ্যা লিখুন (যেমন ৩০)",
        days: "দিন",
        calculateBill: "বিল গণনা করুন",
        calculationResults: "গণনার ফলাফল",
        unitsConsumed: "ব্যবহৃত ইউনিট:",
        estimatedBill: "আনুমানিক বিল:",
        dailyAverage: "দৈনিক গড়:",
        costPerUnit: "প্রতি ইউনিট খরচ:",
        howToUse: "💡 এই ক্যালকুলেটর কিভাবে ব্যবহার করবেন",
        step1: "• আপনার পূর্ববর্তী মিটার রিডিং লিখুন (শেষ বিল থেকে)",
        step2: "• আপনার বর্তমান মিটার রিডিং লিখুন",
        step3: "• বিলিং সময়কাল দিনে নির্দিষ্ট করুন",
        step4: "• ব্যবহৃত ইউনিট এবং আনুমানিক বিলের তাৎক্ষণিক গণনা পান",
        step5: "• আপনার গড় দৈনিক ব্যবহারের প্যাটার্ন দেখুন",
        usageAnalysis: "ব্যবহার বিশ্লেষণ",
        consumptionPatterns: "আপনার বিদ্যুৎ ব্যবহারের প্যাটার্ন",
        totalUnits: "মোট ইউনিট",
        avgUnitsPerCalc: "প্রতি গণনায় গড় ইউনিট",
        stable: "স্থিতিশীল",
        usageTrend: "ব্যবহারের প্রবণতা",
        recentCalculationsPattern: "সাম্প্রতিক গণনার প্যাটার্ন",
        billPrediction: "বিলের পূর্বাভাস",
        basedOnPatterns: "আপনার ব্যবহারের প্যাটার্নের উপর ভিত্তি করে",
        next30Days: "আগামী ৩০ দিন",
        monthlyAverage: "মাসিক গড়",
        kElectricTariff: "K-Electric টেরিফ হার",
        tariff1: "০-১০০ ইউনিট:",
        tariff2: "১০১-২০০ ইউনিট:",
        tariff3: "২০১-৩০০ ইউনিট:",
        tariff4: "৩০১-৭০০ ইউনিট:",
        tariff5: "৭০০+ ইউনিট:",
        recentCalculations: "সাম্প্রতিক গণনা",
        latestBillCalculations: "আপনার সাম্প্রতিক বিল গণনা",
        noCalculationsYet: "এখনো কোন গণনা নেই। শুরু করতে উপরের ক্যালকুলেটর ব্যবহার করুন!",
        validationError: "দয়া করে বৈধ রিডিং এবং বিলিং দিন (১-৩৬৫) লিখুন"
    },
    tr: {
        title: "Karaçi Elektrik Takip Sistemi",
        subtitle: "K-Electric tüketim ve faturalarınızı izleyin",
        liveTracking: "Canlı Takip",
        totalUnitsConsumed: "Toplam Tüketilen Birim",
        units: "Birim",
        estimatedBillAmount: "Tahmini Fatura Tutarı",
        currentPeriod: "Mevcut dönem",
        averageDailyUsage: "Günlük Ortalama Kullanım",
        unitsPerDay: "Günlük birim",
        predictedMonthlyBill: "Öngörülen Aylık Fatura",
        basedOnAvgUsage: "Ortalama kullanıma dayalı",
        calculateUnitsBill: "Birim ve Fatura Hesapla",
        enterReadings: "Mevcut ve önceki sayaç okumalarınızı girin",
        previousReading: "Önceki Okuma (Birim)",
        previousReadingPlaceholder: "Önceki birimleri girin (örn. 12000)",
        currentReading: "Mevcut Okuma (Birim)",
        currentReadingPlaceholder: "Mevcut birimleri girin (örn. 12345)",
        billingPeriod: "Fatura Dönemi (Gün)",
        billingDaysPlaceholder: "Gün sayısını girin (örn. 30)",
        days: "gün",
        calculateBill: "Fatura Hesapla",
        calculationResults: "Hesaplama Sonuçları",
        unitsConsumed: "Tüketilen Birim:",
        estimatedBill: "Tahmini Fatura:",
        dailyAverage: "Günlük Ortalama:",
        costPerUnit: "Birim Başına Maliyet:",
        howToUse: "💡 Bu hesap makinesini nasıl kullanır",
        step1: "• Önceki sayaç okumalarınızı girin (son faturadan)",
        step2: "• Mevcut sayaç okumalarınızı girin",
        step3: "• Fatura dönemini gün olarak belirtin",
        step4: "• Tüketilen birim ve tahmini faturanın anında hesaplanmasını alın",
        step5: "• Ortalama günlük tüketim modelinizi görüntüleyin",
        usageAnalysis: "Kullanım Analizi",
        consumptionPatterns: "Elektrik tüketim modelleriniz",
        totalUnits: "Toplam Birim",
        avgUnitsPerCalc: "Hesaplama başına ortalama birim",
        stable: "Kararlı",
        usageTrend: "Kullanım eğilimi",
        recentCalculationsPattern: "Son Hesaplama Modeli",
        billPrediction: "Fatura Tahmini",
        basedOnPatterns: "Kullanım modellerinize dayalı",
        next30Days: "Sonraki 30 Gün",
        monthlyAverage: "Aylık Ortalama",
        kElectricTariff: "K-Electric Tarifeleri",
        tariff1: "0-100 birim:",
        tariff2: "101-200 birim:",
        tariff3: "201-300 birim:",
        tariff4: "301-700 birim:",
        tariff5: "700+ birim:",
        recentCalculations: "Son Hesaplamalar",
        latestBillCalculations: "En son fatura hesaplamalarınız",
        noCalculationsYet: "Henüz hesaplama yok. Başlamak için yukarıdaki hesap makinesini kullanın!",
        validationError: "Lütfen geçerli okumalar ve fatura günleri (1-365) girin"
    }
};

// Language data
const languageNames = {
    en: "English",
    ur: "اردو",
    es: "Español",
    fr: "Français",
    de: "Deutsch",
    it: "Italiano",
    pt: "Português",
    ru: "Русский",
    ja: "日本語",
    ko: "한국어",
    zh: "中文",
    ar: "العربية",
    hi: "हिंदी",
    bn: "বাংলা",
    tr: "Türkçe"
};

// RTL languages
const rtlLanguages = ['ur', 'ar'];

// Current language
let currentLanguage = 'en';

// Number conversion maps for different scripts
const numberMaps = {
    western: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    urdu: ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'],
    arabic: ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'],
    devanagari: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
    bengali: ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯']
};

// Get number system for language
function getNumberSystem(lang) {
    const numberSystems = {
        'ur': 'urdu',
        'ar': 'arabic',
        'hi': 'devanagari',
        'bn': 'bengali'
    };
    return numberSystems[lang] || 'western';
}

// Convert numbers to appropriate script
function convertNumber(num, lang = currentLanguage) {
    const numberSystem = getNumberSystem(lang);
    if (numberSystem === 'western') return num.toString();
    
    const map = numberMaps[numberSystem];
    if (!map) return num.toString();
    
    return num.toString().replace(/[0-9]/g, digit => map[parseInt(digit)]);
}

// Format currency with proper localization
function formatCurrency(amount, lang = currentLanguage) {
    const currencies = {
        'en': 'Rs.',
        'ur': 'روپے',
        'ar': 'ر.س',
        'hi': '₹',
        'es': '$',
        'fr': '€',
        'de': '€',
        'it': '€',
        'pt': 'R$',
        'ru': '₽',
        'ja': '¥',
        'ko': '₩',
        'zh': '¥',
        'bn': '৳',
        'tr': '₺'
    };
    
    const currency = currencies[lang] || 'Rs.';
    const convertedAmount = convertNumber(Math.round(amount), lang);
    
    // For RTL languages, put currency after the number
    if (rtlLanguages.includes(lang)) {
        return `${convertedAmount} ${currency}`;
    }
    return `${currency} ${convertedAmount}`;
}

// Translation function
function t(key) {
    return translations[currentLanguage]?.[key] || translations.en[key] || key;
}

// Function to toggle language menu
function toggleLanguageMenu() {
    const menu = document.getElementById('languageMenu');
    const button = document.querySelector('.translate-btn');
    
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        button.classList.remove('active');
    } else {
        menu.classList.add('active');
        button.classList.add('active');
    }
}

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;
    
    // Update button text
    document.getElementById('currentLangLabel').textContent = languageNames[lang];
    
    // Close menu
    document.getElementById('languageMenu').classList.remove('active');
    document.querySelector('.translate-btn').classList.remove('active');
    
    // Update page direction for RTL languages
    if (rtlLanguages.includes(lang)) {
        document.body.setAttribute('dir', 'rtl');
    } else {
        document.body.setAttribute('dir', 'ltr');
    }
    
    // Update all translatable elements
    updateTranslations();
    
    // Update placeholders
    updatePlaceholders();
    
    // Update numbers and currency
    updateDisplayedNumbers();
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Function to update all translations
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = t(key);
    });
}

// Function to update placeholders
function updatePlaceholders() {
    const elements = document.querySelectorAll('[data-translate-placeholder]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = t(key);
    });
}

// Update displayed numbers when language changes
function updateDisplayedNumbers() {
    // Update static numbers in tariff rates
    const tariffItems = document.querySelectorAll('.tariff-item span:last-child');
    const rates = [16, 18, 22, 28, 35];
    tariffItems.forEach((item, index) => {
        if (rates[index]) {
            item.textContent = `${formatCurrency(rates[index])}/unit`;
        }
    });
    
    // Update any displayed calculation results if they exist
    const current = parseFloat(document.getElementById("currentReading").value);
    const previous = parseFloat(document.getElementById("previousReading").value);
    const days = parseInt(document.getElementById("billingDays").value);
    
    if (!isNaN(current) && !isNaN(previous) && !isNaN(days) && current > previous) {
        calculatetotal();
    }
}

// Original calculation functions with number localization
function getSlabRate(units) {
    if (units <= 100) return 16;
    else if (units <= 200) return 18;
    else if (units <= 300) return 22;
    else if (units <= 700) return 28;
    else return 35;
}

function calculatetotal() {
    const current = parseFloat(document.getElementById("currentReading").value);
    const previous = parseFloat(document.getElementById("previousReading").value);
    const days = parseInt(document.getElementById("billingDays").value);

    if (
        isNaN(current) || isNaN(previous) || isNaN(days) ||
        current < previous || days <= 0 || days > 365
    ) {
        alert(t('validationError'));
        return;
    }

    const totalunit = current - previous;
    const averageDaily = totalunit / days;

    const rate = getSlabRate(totalunit);
    const estimatedBill = totalunit * rate;

    const remainingDays = 30 - days;
    const predictedAmount = estimatedBill + (rate * averageDaily * remainingDays);

    const fullMonthUnits = averageDaily * 30;
    const thirtyDayBill = fullMonthUnits * rate;

    // Display output with proper number formatting
    document.getElementById("totalUnitsConsumed").textContent = convertNumber(totalunit.toFixed(1));
    document.getElementById("resultUnitsConsumed").textContent = `${convertNumber(totalunit.toFixed(1))} ${t('units')}`;
    document.getElementById("avgDailyUsage").textContent = convertNumber(averageDaily.toFixed(2));
    document.getElementById("resultDailyAverage").textContent = `${convertNumber(averageDaily.toFixed(2))} ${t('unitsPerDay')}`;

    document.getElementById("estimatedBill").textContent = formatCurrency(estimatedBill);
    document.getElementById("predictedMonthlyBill").textContent = formatCurrency(predictedAmount);
    document.getElementById("next30DaysUnits").textContent = `${convertNumber(fullMonthUnits.toFixed(1))} ${t('units')}`;
    document.getElementById("next30DaysBill").textContent = formatCurrency(thirtyDayBill);

    document.getElementById("resultEstimatedBill").textContent = formatCurrency(estimatedBill);
    document.getElementById("resultCostPerUnit").textContent = formatCurrency(rate);

    document.getElementById("calculationResults").style.display = "block";
}

// Close language menu when clicking outside
document.addEventListener('click', function(event) {
    const translateButton = document.getElementById('translateButton');
    const languageMenu = document.getElementById('languageMenu');
    
    if (!translateButton.contains(event.target)) {
        languageMenu.classList.remove('active');
        document.querySelector('.translate-btn').classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
    
    // Update language options with selected state
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            languageOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });
    
    // Initialize tariff rates with proper formatting
    updateDisplayedNumbers();
});

// Original calculation functions
function getSlabRate(units) {
    if (units <= 100) return 16;
    else if (units <= 200) return 18;
    else if (units <= 300) return 22;
    else if (units <= 700) return 28;
    else return 35;
}

function calculatetotal() {
    const current = parseFloat(document.getElementById("currentReading").value);
    const previous = parseFloat(document.getElementById("previousReading").value);
    const days = parseInt(document.getElementById("billingDays").value);

    if (
        isNaN(current) || isNaN(previous) || isNaN(days) ||
        current < previous || days <= 0 || days > 365
    ) {
        alert(t('validationError'));
        return;
    }

    const totalunit = current - previous;
    const averageDaily = totalunit / days;

    const rate = getSlabRate(totalunit);
    const estimatedBill = totalunit * rate;

    const remainingDays = 30 - days;
    const predictedAmount = estimatedBill + (rate * averageDaily * remainingDays);

    const fullMonthUnits = averageDaily * 30;
    const thirtyDayBill = fullMonthUnits * rate;

    // Display output
    document.getElementById("totalUnitsConsumed").textContent = totalunit.toFixed(1);
    document.getElementById("resultUnitsConsumed").textContent = totalunit.toFixed(1) + " " + t('units');
    document.getElementById("avgDailyUsage").textContent = averageDaily.toFixed(2);
    document.getElementById("resultDailyAverage").textContent = averageDaily.toFixed(2) + " " + t('unitsPerDay');

    document.getElementById("estimatedBill").textContent = `Rs. ${Math.round(estimatedBill)}`;
    document.getElementById("predictedMonthlyBill").textContent = `Rs. ${Math.round(predictedAmount)}`;
    document.getElementById("next30DaysUnits").textContent = fullMonthUnits.toFixed(1) + " " + t('units');
    document.getElementById("next30DaysBill").textContent = `Rs. ${Math.round(thirtyDayBill)}`;

    document.getElementById("resultEstimatedBill").textContent = `Rs. ${Math.round(estimatedBill)}`;
    document.getElementById("resultCostPerUnit").textContent = `Rs. ${rate}`;

    document.getElementById("calculationResults").style.display = "block";
}

// Close language menu when clicking outside
document.addEventListener('click', function(event) {
    const translateButton = document.getElementById('translateButton');
    const languageMenu = document.getElementById('languageMenu');
    
    if (!translateButton.contains(event.target)) {
        languageMenu.classList.remove('active');
        document.querySelector('.translate-btn').classList.remove('active');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        changeLanguage(savedLanguage);
    }
    
    // Update language options with selected state
    const languageOptions = document.querySelectorAll('.language-option');
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            languageOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
        });
    });
});
