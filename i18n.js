(() => {
  "use strict";

  const languages = Object.freeze({
    en: { label: "EN", name: "English", dir: "ltr" },
    ar: { label: "AR", name: "العربية", dir: "rtl" },
    tr: { label: "TR", name: "Türkçe", dir: "ltr" },
    fr: { label: "FR", name: "Français", dir: "ltr" },
    es: { label: "ES", name: "Español", dir: "ltr" },
    de: { label: "DE", name: "Deutsch", dir: "ltr" }
  });

  const text = Object.freeze({
    ar: {
      "SENTINEL": "SENTINEL",
      "TRUST & VERIFICATION LAYER": "طبقة الثقة والتحقق",
      "PoC Governance Console": "لوحة حوكمة إثبات المفهوم",
      "EVIDENCE BEFORE AUTHORITY.": "الدليل قبل الصلاحية.",
      "SYNTHETIC OBSERVATION": "ملاحظة اصطناعية",
      "READ-ONLY": "للقراءة فقط",
      "FAIL-CLOSED ENFORCED": "فرض الإغلاق الآمن عند الرفض",
      "Latest merged": "آخر حد مدمج",
      "Candidate": "النسخة المرشحة",
      "State": "الحالة",
      "locally verified": "متحقق محلياً",
      "Overview": "نظرة عامة",
      "Governance Chain": "سلسلة الحوكمة",
      "Observation Evidence": "دليل الملاحظة",
      "Policy Monitor": "مراقبة السياسة",
      "Claims Boundary": "حدود الادعاءات",
      "Evidence Pack": "حزمة الأدلة",
      "High-trust institutional assurance console": "لوحة ضمان مؤسسية عالية الثقة",
      "Govern what may be trusted before any operational authority exists.": "حوكمة ما يمكن الوثوق به قبل وجود أي صلاحية تشغيلية.",
      "SENTINEL evaluates synthetic evidence, rejects unauthorized claims, and produces reviewable assurance records without modifying financial systems.": "تقيّم SENTINEL الأدلة الاصطناعية، وترفض الادعاءات غير المصرح بها، وتنتج سجلات ضمان قابلة للمراجعة من دون تعديل الأنظمة المالية.",
      "FAIL-CLOSED": "إغلاق آمن عند الرفض",
      "ENFORCED": "مفروض",
      "AUTHORITY TO EXECUTE": "صلاحية التنفيذ",
      "DISABLED": "معطلة",
      "EXTERNAL EFFECT": "تأثير خارجي",
      "NONE": "لا يوجد",
      "EVIDENCE INTEGRITY": "سلامة الأدلة",
      "VERIFIED": "متحقق",
      "Refusal is the default when authority language or source identity is not acceptable.": "الرفض هو السلوك الافتراضي عندما تكون لغة الصلاحية أو هوية المصدر غير مقبولة.",
      "The console cannot initiate operations, commands, workflows, or system changes.": "لا تستطيع اللوحة بدء عمليات أو أوامر أو مسارات عمل أو تغييرات في النظام.",
      "Static local display only; no external connection is required or used.": "عرض محلي ثابت فقط؛ لا يلزم أو يُستخدم أي اتصال خارجي.",
      "Bound to approved evidence and source state.": "مرتبطة بالأدلة المعتمدة وحالة المصدر.",
      "Latest merged boundary": "آخر حد مدمج",
      "Current candidate snapshot": "لقطة الدليل المرشحة الحالية",
      "T1755 state": "حالة حزمة العرض",
      "Merge commit": "معرّف الدمج",
      "Snapshot mode": "وضع اللقطة",
      "External connections": "الاتصالات الخارجية",
      "static / read-only": "ثابت / قراءة فقط",
      "none": "لا يوجد",
      "Locally verified": "متحقق محلياً",
      "Every gate is explicit before any authority can be considered.": "كل بوابة صريحة قبل النظر في أي صلاحية.",
      "Evidence Intake": "استقبال الدليل",
      "Review": "المراجعة",
      "Decision": "القرار",
      "Approval": "الاعتماد",
      "Authorization": "الترخيص",
      "Readiness": "الجاهزية",
      "Final Freeze": "التجميد النهائي",
      "Reconciliation": "المطابقة",
      "Synthetic Evidence": "الدليل الاصطناعي",
      "Bank PoC Boundary": "حدود إثبات المفهوم البنكي",
      "6 controls · No authority granted": "6 ضوابط · لا توجد صلاحية ممنوحة",
      "5 controls · No authority granted": "5 ضوابط · لا توجد صلاحية ممنوحة",
      "4 controls · No authority granted": "4 ضوابط · لا توجد صلاحية ممنوحة",
      "Selected gate detail": "تفاصيل البوابة المحددة",
      "Purpose": "الغرض",
      "Required": "المطلوب",
      "Refused": "المرفوض",
      "Evidence state": "حالة الدليل",
      "Confirm evidence is controlled before review.": "تأكيد أن الدليل مضبوط قبل المراجعة.",
      "Approved source identity and deterministic binding.": "هوية مصدر معتمدة وربط حتمي.",
      "Ambiguous source state or unauthorized authority implication.": "حالة مصدر غامضة أو إيحاء بصلاحية غير مصرح بها.",
      "Synthetic Observation Evidence": "دليل الملاحظة الاصطناعية",
      "Evidence moves through controls; no system is modified.": "يمر الدليل عبر الضوابط؛ ولا يتم تعديل أي نظام.",
      "Synthetic Fixture": "مدخل اصطناعي",
      "Canonical Record": "سجل معياري",
      "Governance Evaluation": "تقييم الحوكمة",
      "Authority Language Scan": "فحص لغة الصلاحية",
      "Certificate Binding": "ربط الشهادة",
      "Synthetic": "اصطناعي",
      "Compliant": "متوافق",
      "GOVERNANCE VERDICT": "حكم الحوكمة",
      "SYNTHETIC EVIDENCE VERIFIED": "الدليل الاصطناعي متحقق",
      "No operational instruction created": "لم يتم إنشاء أي تعليمات تشغيلية",
      "No financial authority granted": "لم تُمنح أي صلاحية مالية",
      "No external system modified": "لم يتم تعديل أي نظام خارجي",
      "Evidence state: Verified": "حالة الدليل: متحقق",
      "Fail-Closed Policy Monitor": "مراقبة سياسة الإغلاق الآمن",
      "Policy health and demonstration cases are visible without editable inputs.": "حالة السياسة وحالات العرض ظاهرة من دون مدخلات قابلة للتعديل.",
      "Policy state": "حالة السياسة",
      "Language normalization": "تطبيع اللغة",
      "Obfuscation detection": "كشف التمويه",
      "Fail-closed response": "استجابة الإغلاق الآمن",
      "ACTIVE": "فعّال",
      "Operational authority": "صلاحية تشغيلية",
      "Financial authority": "صلاحية مالية",
      "Production authority": "صلاحية إنتاجية",
      "External-effect claims": "ادعاءات التأثير الخارجي",
      "Formatted variants": "صيغ منسقة",
      "Obfuscated variants": "صيغ مموهة",
      "SCENARIO 01": "السيناريو 01",
      "SCENARIO 02": "السيناريو 02",
      "Negated prohibited authority phrase": "عبارة صلاحية محظورة بصيغة نفي",
      "Synthetic observation-only statement": "عبارة ملاحظة اصطناعية فقط",
      "REFUSED": "مرفوض",
      "ACCEPTED": "مقبول",
      "The phrase category is refused even when presented as a negated statement.": "تُرفض فئة العبارة حتى عندما تُعرض بصيغة النفي.",
      "Observation-only wording remains valid because it carries no operational, financial, or external-effect claim.": "تبقى صياغة الملاحظة فقط صالحة لأنها لا تحمل ادعاءً تشغيلياً أو مالياً أو ذا تأثير خارجي.",
      "Previous": "السابق",
      "Next": "التالي",
      "Clear scope is a control, not a disclaimer.": "وضوح النطاق ضابط حوكمة، وليس مجرد تنبيه.",
      "Demonstrated": "ما تم إثباته",
      "Explicitly not claimed": "ما لا يتم ادعاؤه صراحة",
      "Synthetic observation": "ملاحظة اصطناعية",
      "Fail-closed governance": "حوكمة إغلاق آمن",
      "Canonical validation": "تحقق معياري",
      "Certificate binding": "ربط الشهادة",
      "Prohibited-claim detection": "كشف الادعاءات المحظورة",
      "Evidence generation": "توليد الأدلة",
      "No payment instruction": "لا توجد تعليمات دفع",
      "No settlement authority": "لا توجد صلاحية تسوية",
      "No customer-fund access": "لا يوجد وصول إلى أموال العملاء",
      "No production integration claim": "لا يوجد ادعاء تكامل إنتاجي",
      "No regulatory certification": "لا توجد شهادة تنظيمية",
      "No production performance claim": "لا يوجد ادعاء أداء إنتاجي",
      "Examiner Evidence Pack": "حزمة أدلة الفاحص",
      "Technical evidence remains available without entering the boardroom flow.": "تبقى الأدلة التقنية متاحة دون إدخالها في مسار العرض التنفيذي.",
      "Evidence Layer": "طبقة الدليل",
      "What it controls": "ما الذي تضبطه",
      "Verification": "التحقق",
      "Status": "الحالة",
      "Governance Language Control": "ضبط لغة الحوكمة",
      "Bank PoC Claims Boundary": "حدود ادعاءات إثبات المفهوم البنكي",
      "Read-Only Evidence Snapshot": "لقطة أدلة للقراءة فقط",
      "Static Console Shell": "واجهة ثابتة للوحة",
      "Evidence Snapshot & Print Pack": "حزمة لقطة الدليل والطباعة",
      "Certificate wording and authority-language enforcement": "صياغة الشهادة وفرض لغة الصلاحية",
      "Bank-facing claims and non-claims package": "حزمة الادعاءات وعدم الادعاءات الموجهة للبنك",
      "Console data model and non-execution boundary": "نموذج بيانات اللوحة وحدود عدم التنفيذ",
      "Offline read-only frontend skeleton": "واجهة ثابتة محلية للقراءة فقط",
      "Deterministic snapshot, print identity, and meeting-ready evidence view": "لقطة حتمية، هوية طباعة، وعرض أدلة جاهز للاجتماع",
      "6/6 checks passed": "6/6 فحوصات ناجحة",
      "Merged": "مدمج",
      "Authority-language policy": "سياسة لغة الصلاحية",
      "Frontend scope policy": "سياسة نطاق الواجهة",
      "Snapshot / print binding": "ربط اللقطة والطباعة",
      "Candidate snapshot": "اللقطة المرشحة",
      "Snapshot digest": "بصمة اللقطة",
      "Network dependencies": "اعتماديات الشبكة",
      "Generate PoC Evidence Summary": "إنشاء ملخص أدلة إثبات المفهوم"
    },
    tr: {
      "PoC Governance Console": "PoC Yönetişim Konsolu",
      "EVIDENCE BEFORE AUTHORITY.": "Yetkiden Önce Kanıt.",
      "SYNTHETIC OBSERVATION": "Sentetik Gözlem",
      "READ-ONLY": "Salt Okunur",
      "FAIL-CLOSED ENFORCED": "Fail-Closed Zorunlu",
      "Overview": "Genel Bakış",
      "Governance Chain": "Yönetişim Zinciri",
      "Observation Evidence": "Gözlem Kanıtı",
      "Policy Monitor": "Politika İzleme",
      "Claims Boundary": "İddia Sınırı",
      "Evidence Pack": "Kanıt Paketi",
      "High-trust institutional assurance console": "Yüksek güvenli kurumsal güvence konsolu",
      "Govern what may be trusted before any operational authority exists.": "Herhangi bir operasyonel yetki oluşmadan önce neye güvenilebileceğini yönetin.",
      "SENTINEL evaluates synthetic evidence, rejects unauthorized claims, and produces reviewable assurance records without modifying financial systems.": "SENTINEL sentetik kanıtları değerlendirir, yetkisiz iddiaları reddeder ve finansal sistemleri değiştirmeden incelenebilir güvence kayıtları üretir.",
      "FAIL-CLOSED": "Fail-Closed",
      "ENFORCED": "Zorunlu",
      "AUTHORITY TO EXECUTE": "Yürütme Yetkisi",
      "DISABLED": "Devre Dışı",
      "EXTERNAL EFFECT": "Harici Etki",
      "NONE": "Yok",
      "EVIDENCE INTEGRITY": "Kanıt Bütünlüğü",
      "VERIFIED": "Doğrulandı",
      "Latest merged boundary": "Son birleştirilen sınır",
      "Current candidate snapshot": "Geçerli aday anlık görüntü",
      "T1755 state": "T1755 durumu",
      "Merge commit": "Birleştirme kaydı",
      "Snapshot mode": "Anlık görüntü modu",
      "External connections": "Harici bağlantılar",
      "static / read-only": "statik / salt okunur",
      "none": "yok",
      "Locally verified": "Yerel olarak doğrulandı",
      "Every gate is explicit before any authority can be considered.": "Her yetki değerlendirmesinden önce her kapı açıktır.",
      "Evidence Intake": "Kanıt Alımı",
      "Review": "İnceleme",
      "Decision": "Karar",
      "Approval": "Onay",
      "Authorization": "Yetkilendirme",
      "Readiness": "Hazırlık",
      "Final Freeze": "Son Dondurma",
      "Reconciliation": "Uzlaştırma",
      "Synthetic Evidence": "Sentetik Kanıt",
      "Bank PoC Boundary": "Banka PoC Sınırı",
      "No authority granted": "Yetki verilmedi",
      "Synthetic Observation Evidence": "Sentetik Gözlem Kanıtı",
      "Evidence moves through controls; no system is modified.": "Kanıt kontrollerden geçer; hiçbir sistem değiştirilmez.",
      "GOVERNANCE VERDICT": "Yönetişim Kararı",
      "SYNTHETIC EVIDENCE VERIFIED": "Sentetik Kanıt Doğrulandı",
      "No operational instruction created": "Operasyonel talimat oluşturulmadı",
      "No financial authority granted": "Finansal yetki verilmedi",
      "No external system modified": "Harici sistem değiştirilmedi",
      "Fail-Closed Policy Monitor": "Fail-Closed Politika İzleme",
      "Policy state": "Politika durumu",
      "Language normalization": "Dil normalizasyonu",
      "Obfuscation detection": "Gizleme tespiti",
      "ACTIVE": "Aktif",
      "Operational authority": "Operasyonel yetki",
      "Financial authority": "Finansal yetki",
      "Production authority": "Üretim yetkisi",
      "REFUSED": "Reddedildi",
      "ACCEPTED": "Kabul edildi",
      "Clear scope is a control, not a disclaimer.": "Net kapsam bir kontroldür, feragat metni değildir.",
      "Demonstrated": "Gösterilen",
      "Explicitly not claimed": "Açıkça iddia edilmeyen",
      "Examiner Evidence Pack": "Denetçi Kanıt Paketi",
      "Evidence Layer": "Kanıt Katmanı",
      "What it controls": "Kontrol ettiği alan",
      "Verification": "Doğrulama",
      "Status": "Durum",
      "Governance Language Control": "Yönetişim Dili Kontrolü",
      "Bank PoC Claims Boundary": "Banka PoC İddia Sınırı",
      "Read-Only Evidence Snapshot": "Salt Okunur Kanıt Anlık Görüntüsü",
      "Static Console Shell": "Statik Konsol Kabuğu",
      "Evidence Snapshot & Print Pack": "Kanıt Anlık Görüntüsü ve Baskı Paketi",
      "6/6 checks passed": "6/6 kontrol geçti",
      "Merged": "Birleştirildi",
      "Authority-language policy": "Yetki dili politikası",
      "Frontend scope policy": "Önyüz kapsam politikası",
      "Snapshot / print binding": "Anlık görüntü / baskı bağı",
      "Generate PoC Evidence Summary": "PoC Kanıt Özeti Oluştur"
    },
    fr: {
      "PoC Governance Console": "Console de gouvernance PoC",
      "EVIDENCE BEFORE AUTHORITY.": "La preuve avant l’autorité.",
      "SYNTHETIC OBSERVATION": "Observation synthétique",
      "READ-ONLY": "Lecture seule",
      "FAIL-CLOSED ENFORCED": "Fail-closed appliqué",
      "Overview": "Vue d’ensemble",
      "Governance Chain": "Chaîne de gouvernance",
      "Observation Evidence": "Preuve d’observation",
      "Policy Monitor": "Suivi des politiques",
      "Claims Boundary": "Limite des affirmations",
      "Evidence Pack": "Dossier de preuves",
      "High-trust institutional assurance console": "Console d’assurance institutionnelle à haute confiance",
      "Govern what may be trusted before any operational authority exists.": "Gouverner ce qui peut être fiable avant toute autorité opérationnelle.",
      "SENTINEL evaluates synthetic evidence, rejects unauthorized claims, and produces reviewable assurance records without modifying financial systems.": "SENTINEL évalue des preuves synthétiques, rejette les affirmations non autorisées et produit des dossiers d’assurance vérifiables sans modifier les systèmes financiers.",
      "FAIL-CLOSED": "Fail-closed",
      "ENFORCED": "Appliqué",
      "AUTHORITY TO EXECUTE": "Autorité d’exécution",
      "DISABLED": "Désactivée",
      "EXTERNAL EFFECT": "Effet externe",
      "NONE": "Aucun",
      "EVIDENCE INTEGRITY": "Intégrité des preuves",
      "VERIFIED": "Vérifié",
      "Latest merged boundary": "Dernière limite fusionnée",
      "Current candidate snapshot": "Instantané candidat actuel",
      "T1755 state": "État T1755",
      "Merge commit": "Commit de fusion",
      "Snapshot mode": "Mode d’instantané",
      "External connections": "Connexions externes",
      "static / read-only": "statique / lecture seule",
      "none": "aucune",
      "Locally verified": "Vérifié localement",
      "Every gate is explicit before any authority can be considered.": "Chaque étape est explicite avant toute considération d’autorité.",
      "Evidence Intake": "Réception des preuves",
      "Review": "Examen",
      "Decision": "Décision",
      "Approval": "Approbation",
      "Authorization": "Autorisation",
      "Readiness": "Préparation",
      "Final Freeze": "Gel final",
      "Reconciliation": "Rapprochement",
      "Synthetic Evidence": "Preuve synthétique",
      "Bank PoC Boundary": "Limite PoC bancaire",
      "No authority granted": "Aucune autorité accordée",
      "Synthetic Observation Evidence": "Preuve d’observation synthétique",
      "Evidence moves through controls; no system is modified.": "La preuve passe par les contrôles ; aucun système n’est modifié.",
      "GOVERNANCE VERDICT": "Verdict de gouvernance",
      "SYNTHETIC EVIDENCE VERIFIED": "Preuve synthétique vérifiée",
      "No operational instruction created": "Aucune instruction opérationnelle créée",
      "No financial authority granted": "Aucune autorité financière accordée",
      "No external system modified": "Aucun système externe modifié",
      "Fail-Closed Policy Monitor": "Suivi de politique fail-closed",
      "Policy state": "État de la politique",
      "Language normalization": "Normalisation du langage",
      "Obfuscation detection": "Détection d’obfuscation",
      "ACTIVE": "Actif",
      "Operational authority": "Autorité opérationnelle",
      "Financial authority": "Autorité financière",
      "Production authority": "Autorité de production",
      "REFUSED": "Refusé",
      "ACCEPTED": "Accepté",
      "Clear scope is a control, not a disclaimer.": "Un périmètre clair est un contrôle, pas une clause de non-responsabilité.",
      "Demonstrated": "Démontré",
      "Explicitly not claimed": "Non revendiqué explicitement",
      "Examiner Evidence Pack": "Dossier de preuves examinateur",
      "Evidence Layer": "Couche de preuve",
      "What it controls": "Ce qu’elle contrôle",
      "Verification": "Vérification",
      "Status": "Statut",
      "Governance Language Control": "Contrôle du langage de gouvernance",
      "Bank PoC Claims Boundary": "Limite des affirmations du PoC bancaire",
      "Read-Only Evidence Snapshot": "Instantané de preuve en lecture seule",
      "Static Console Shell": "Interface statique de console",
      "Evidence Snapshot & Print Pack": "Pack instantané de preuve et impression",
      "6/6 checks passed": "6/6 contrôles réussis",
      "Merged": "Fusionné",
      "Authority-language policy": "Politique de langage d’autorité",
      "Frontend scope policy": "Politique de périmètre frontend",
      "Snapshot / print binding": "Liaison instantané / impression",
      "Generate PoC Evidence Summary": "Générer le résumé de preuve PoC"
    },
    es: {
      "PoC Governance Console": "Consola de gobernanza PoC",
      "EVIDENCE BEFORE AUTHORITY.": "Evidencia antes que autoridad.",
      "SYNTHETIC OBSERVATION": "Observación sintética",
      "READ-ONLY": "Solo lectura",
      "FAIL-CLOSED ENFORCED": "Fail-closed aplicado",
      "Overview": "Resumen",
      "Governance Chain": "Cadena de gobernanza",
      "Observation Evidence": "Evidencia de observación",
      "Policy Monitor": "Monitor de políticas",
      "Claims Boundary": "Límite de afirmaciones",
      "Evidence Pack": "Paquete de evidencias",
      "High-trust institutional assurance console": "Consola institucional de alta confianza",
      "Govern what may be trusted before any operational authority exists.": "Gobernar lo que puede confiarse antes de cualquier autoridad operacional.",
      "SENTINEL evaluates synthetic evidence, rejects unauthorized claims, and produces reviewable assurance records without modifying financial systems.": "SENTINEL evalúa evidencia sintética, rechaza afirmaciones no autorizadas y produce registros revisables sin modificar sistemas financieros.",
      "FAIL-CLOSED": "Fail-closed",
      "ENFORCED": "Aplicado",
      "AUTHORITY TO EXECUTE": "Autoridad de ejecución",
      "DISABLED": "Deshabilitada",
      "EXTERNAL EFFECT": "Efecto externo",
      "NONE": "Ninguno",
      "EVIDENCE INTEGRITY": "Integridad de evidencia",
      "VERIFIED": "Verificado",
      "Governance Language Control": "Control del lenguaje de gobernanza",
      "Bank PoC Claims Boundary": "Límite de afirmaciones PoC bancario",
      "Read-Only Evidence Snapshot": "Instantánea de evidencia de solo lectura",
      "Static Console Shell": "Interfaz estática de consola",
      "Evidence Snapshot & Print Pack": "Paquete de instantánea e impresión de evidencia",
      "6/6 checks passed": "6/6 controles aprobados",
      "Merged": "Fusionado",
      "Locally verified": "Verificado localmente",
      "Generate PoC Evidence Summary": "Generar resumen de evidencia PoC"
    },
    de: {
      "PoC Governance Console": "PoC-Governance-Konsole",
      "EVIDENCE BEFORE AUTHORITY.": "Nachweis vor Befugnis.",
      "SYNTHETIC OBSERVATION": "Synthetische Beobachtung",
      "READ-ONLY": "Nur Lesen",
      "FAIL-CLOSED ENFORCED": "Fail-closed erzwungen",
      "Overview": "Überblick",
      "Governance Chain": "Governance-Kette",
      "Observation Evidence": "Beobachtungsnachweis",
      "Policy Monitor": "Policy-Monitor",
      "Claims Boundary": "Aussagengrenze",
      "Evidence Pack": "Nachweispaket",
      "High-trust institutional assurance console": "Institutionelle Assurance-Konsole mit hohem Vertrauen",
      "Govern what may be trusted before any operational authority exists.": "Steuern, was vertrauenswürdig ist, bevor operative Befugnis besteht.",
      "SENTINEL evaluates synthetic evidence, rejects unauthorized claims, and produces reviewable assurance records without modifying financial systems.": "SENTINEL bewertet synthetische Nachweise, weist unbefugte Aussagen zurück und erzeugt prüfbare Assurance-Aufzeichnungen ohne Finanzsysteme zu verändern.",
      "FAIL-CLOSED": "Fail-closed",
      "ENFORCED": "Erzwungen",
      "AUTHORITY TO EXECUTE": "Ausführungsbefugnis",
      "DISABLED": "Deaktiviert",
      "EXTERNAL EFFECT": "Externe Wirkung",
      "NONE": "Keine",
      "EVIDENCE INTEGRITY": "Nachweisintegrität",
      "VERIFIED": "Verifiziert",
      "Governance Language Control": "Governance-Sprachkontrolle",
      "Bank PoC Claims Boundary": "Aussagengrenze für Banken-PoC",
      "Read-Only Evidence Snapshot": "Nur-Lese-Nachweis-Snapshot",
      "Static Console Shell": "Statische Konsolenoberfläche",
      "Evidence Snapshot & Print Pack": "Nachweis-Snapshot- und Druckpaket",
      "6/6 checks passed": "6/6 Prüfungen bestanden",
      "Merged": "Zusammengeführt",
      "Locally verified": "Lokal verifiziert",
      "Generate PoC Evidence Summary": "PoC-Nachweiszusammenfassung erzeugen"
    }
  });

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function getRequestedLanguage() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return Object.prototype.hasOwnProperty.call(languages, lang) ? lang : "en";
  }

  function eligibleElement(element) {
    if (!element || !element.childNodes) return false;
    if (["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "IMG"].includes(element.tagName)) return false;
    const children = Array.from(element.childNodes);
    return children.length > 0 && children.every((node) => node.nodeType === Node.TEXT_NODE);
  }

  function captureSourceText() {
    document.querySelectorAll("body *").forEach((element) => {
      if (!eligibleElement(element)) return;
      const value = normalize(element.textContent);
      if (value && !element.dataset.i18nSource) {
        element.dataset.i18nSource = value;
      }
    });
  }

  function applyLanguage(lang) {
    const meta = languages[lang] || languages.en;
    const dictionary = text[lang] || {};
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    document.body.classList.toggle("rtl", meta.dir === "rtl");

    document.querySelectorAll("[data-i18n-source]").forEach((element) => {
      const source = element.dataset.i18nSource;
      element.textContent = lang === "en" ? source : (dictionary[source] || source);
    });

    document.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.getAttribute("data-lang") === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    const url = new URL(window.location.href);
    if (lang === "en") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
  }

  function insertLanguageBar() {
    if (document.getElementById("sentinel-language-bar")) return;
    const bar = document.createElement("nav");
    bar.id = "sentinel-language-bar";
    bar.className = "sentinel-language-bar";
    bar.setAttribute("aria-label", "Language selector");

    Object.entries(languages).forEach(([code, meta]) => {
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.lang = code;
      button.textContent = meta.label;
      button.title = meta.name;
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => applyLanguage(code));
      bar.appendChild(button);
    });

    const topbar = document.querySelector(".topbar");
    if (topbar && topbar.parentNode) {
      topbar.parentNode.insertBefore(bar, topbar.nextSibling);
    } else {
      document.body.insertBefore(bar, document.body.firstChild);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    insertLanguageBar();
    captureSourceText();
    applyLanguage(getRequestedLanguage());
  });
})();
